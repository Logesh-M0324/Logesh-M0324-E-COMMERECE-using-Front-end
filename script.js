// Cart functionality
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartLink = document.getElementById("cart-link");

// Function to update the cart display
function updateCartDisplay() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartLink.textContent = `Cart (${cartCount})`;  // Update cart item count
}

// Function to add items to the cart
function addToCart(product) {
    const productIndex = cart.findIndex(item => item.id === product.id);
    
    // If the product is already in the cart, increment the quantity
    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        // Add new product to cart
        cart.push({...product, quantity: 1});
    }

    // Update the cart in localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update the cart display
    updateCartDisplay();
}

// Function to handle the "Add to Cart" button click
function handleAddToCart(event) {
    const productCard = event.target.closest(".product-card");
    const productId = productCard.dataset.id;
    const productName = productCard.querySelector("h3").textContent;
    const productPrice = parseFloat(productCard.querySelector(".price").textContent.replace('$', ''));

    // Create product object
    const product = {
        id: productId,
        name: productName,
        price: productPrice,
    };

    // Add product to cart
    addToCart(product);
}

// Add event listeners to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll(".product-card .add-to-cart");
addToCartButtons.forEach(button => {
    button.addEventListener("click", handleAddToCart);
});

// Update the cart display when the page loads
updateCartDisplay();

// Form validation
const form = document.getElementById("contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Thank you for your message! We will get back to you shortly.");
        form.reset();
    } else {
        alert("Please fill out all fields.");
    }
});

// Smooth Scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Scroll Reveal for animations
ScrollReveal().reveal('.home', { delay: 200 });
ScrollReveal().reveal('.products', { delay: 200 });
ScrollReveal().reveal('.about', { delay: 200 });
ScrollReveal().reveal('.testimonials', { delay: 200 });
ScrollReveal().reveal('.contact', { delay: 200 });



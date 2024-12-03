
// Sample products for the store
const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 1200, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Headphones", category: "accessories", price: 200, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Keyboard", category: "accessories", price: 150, image: "https://via.placeholder.com/150" },
    { id: 4, name: "Monitor", category: "electronics", price: 300, image: "https://via.placeholder.com/150" },
];

// Function to display products
function displayProducts(filteredProducts = products) {
    const productList = document.getElementById("productList");
    productList.innerHTML = ""; // Clear previous products
    filteredProducts.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Filter products by category
function filterByCategory(category) {
    if (category === "all") {
        displayProducts();
    } else {
        const filtered = products.filter(product => product.category === category);
        displayProducts(filtered);
    }
}

// Filter products by search term
function filterProducts() {
    const searchTerm = document.getElementById("searchBar").value.toLowerCase();
    const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${product.name} has been added to your cart.`);
    }
}

// Initialize product display
window.onload = () => displayProducts();

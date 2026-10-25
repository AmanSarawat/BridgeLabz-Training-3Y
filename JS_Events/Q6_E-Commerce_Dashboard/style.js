
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }

        const products = await response.json();

        products.forEach(product => {
            console.log("Product:", product.title);
            console.log("Price: $" + product.price);
            console.log("Image:", product.image);
            console.log("----------------------");
        });

        displayProducts(products);

    } catch (error) {
        console.log("Failed to load products. Please try again.");
    }
}

function displayProducts(products) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement("div");

        card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Price: $${product.price}</p>
            <img src="${product.image}" alt="${product.title}" width="100">
            <p>Image URL: ${product.image}</p>
        `;

        container.appendChild(card);
    });
}

fetchProducts();

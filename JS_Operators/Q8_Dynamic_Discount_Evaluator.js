
const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = cart.reduce((sum, product) => sum + product.price, 0);
let discountedTotal = 0;

for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    let finalPrice = product.price - (product.price * discount / 100);
    discountedTotal += finalPrice;

    console.log(`${product.item}: ₹${finalPrice}`);
}

if (total > 50000) {
    discountedTotal = discountedTotal - (discountedTotal * 5 / 100);
}

console.log("Original Total: ₹" + total);
console.log("Final Total: ₹" + discountedTotal);


class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    applyCoupon(code) {
        const pattern = /^(SAVE20|DISC10)$/;

        if (!pattern.test(code)) {
            return null;
        }

        let discount = 0;

        if (code === "SAVE20") {
            discount = 20;
        } else if (code === "DISC10") {
            discount = 10;
        }

        return this.getTotal() * (1 - discount / 100);
    }
}

const cart = new Cart();

cart.addItem("Laptop", 50000, 1);
cart.addItem("Mouse", 800, 2);
cart.addItem("Keyboard", 1500, 1);

function displayCart() {
    let output = "<h3>Cart Items</h3>";

    cart.items.forEach(item => {
        output += `<p>${item.name} - ₹${item.price} × ${item.quantity}</p>`;
    });

    output += `<h3>Total: ₹${cart.getTotal()}</h3>`;

    document.getElementById("output").innerHTML = output;
}

function addItem() {
    const name = prompt("Enter item name:");
    const price = Number(prompt("Enter item price:"));
    const quantity = Number(prompt("Enter quantity:"));

    if (name && price > 0 && Number.isInteger(quantity) && quantity > 0) {
        cart.addItem(name, price, quantity);
        displayCart();
        document.getElementById("message").textContent = "Item added successfully.";
    } else {
        document.getElementById("message").textContent = "Enter valid item details.";
    }
}

function applyCoupon() {
    const code = document.getElementById("coupon").value.trim();
    const message = document.getElementById("message");

    const finalTotal = cart.applyCoupon(code);

    if (finalTotal === null) {
        message.textContent = "Invalid coupon! Use SAVE20 or DISC10.";
        message.style.color = "red";
    } else {
        message.textContent = "Coupon applied successfully!";
        message.style.color = "green";

        document.getElementById("output").innerHTML +=
            `<h3>Final Total: ₹${finalTotal.toFixed(2)}</h3>`;
    }
}

displayCart();

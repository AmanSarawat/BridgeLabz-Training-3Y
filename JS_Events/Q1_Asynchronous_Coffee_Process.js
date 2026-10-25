
function boilWater() {
    return new Promise((resolve, reject) => {
        console.log("Boiling water...");

        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Failed to boil water!");
            } else {
                console.log("Water is ready.");
                resolve();
            }
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Brewing coffee...");

        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Failed to brew coffee!");
            } else {
                console.log("Coffee is brewed.");
                resolve();
            }
        }, 1500);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        console.log("Pouring coffee into the cup...");

        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Failed to pour coffee!");
            } else {
                console.log("Coffee poured into the cup.");
                resolve();
            }
        }, 1000);
    });
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch(error => {
        console.log("Error:", error);
    });

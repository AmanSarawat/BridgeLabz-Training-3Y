
function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Order submission failed");
            } else {
                resolve("Order submitted successfully");
            }
        }, 1000);
    });
}

async function processOrder() {
    for (let attempt = 1; attempt <= 3; attempt++) {
        try {
            await submitOrder();
            console.log(`Attempt ${attempt}: Success`);
            return;
        } catch (error) {
            console.log(`Attempt ${attempt}: Failed`);
        }
    }

    throw new Error("Order could not be processed");
}

async function main() {
    try {
        await processOrder();
        console.log("Order processing completed.");
    } catch (error) {
        console.log(error.message);
    }
}

main();

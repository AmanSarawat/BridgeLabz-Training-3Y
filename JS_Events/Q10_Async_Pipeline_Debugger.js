
function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(stepName + " failed"));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

function takeOrder() {
    return deliveryStep("Take order", "Step 1: Order taken");
}

function prepare() {
    return deliveryStep("Prepare food", "Step 2: Food prepared");
}

function pack() {
    return deliveryStep("Pack food", "Step 3: Package ready");
}

function dispatch() {
    return deliveryStep("Dispatch", "Step 4: Out for delivery");
}

function deliver() {
    return deliveryStep("Deliver", "Delivery completed!");
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await takeOrder();
        await prepare();
        await pack();
        await dispatch();
        await deliver();

    } catch (error) {
        console.log("Pipeline failed!");
    }
}
runPipeline();

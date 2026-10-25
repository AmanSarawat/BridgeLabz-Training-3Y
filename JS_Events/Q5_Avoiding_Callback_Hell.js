
function design(callback) {
    setTimeout(() => {
        console.log("1. Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("2. Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("3. Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("4. Deployment completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("5. Celebration time!");
    }, 1000);
}

console.log("Callback Hell:");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate();
            });
        });
    });
});

// Promise-based function for async/await
function runStage(stageName) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stageName);
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    console.log("\nAsync/Await:");

    await runStage("1. Design completed");
    await runStage("2. Build completed");
    await runStage("3. Testing completed");
    await runStage("4. Deployment completed");
    await runStage("5. Celebration time!");
}

runPipeline();

// async/await improves readability because the code looks
// sequential, avoids deeply nested callbacks, and makes
// error handling easier with try/catch.

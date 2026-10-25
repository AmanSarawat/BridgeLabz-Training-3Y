
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isApiFailure = Math.random() < 0.5;

            if (isApiFailure) {
                reject("API request failed!");
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch(error => {
        console.log("Error:", error);
    });


function deployServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(serverName + " deployment failed!");
            } else {
                resolve(serverName + " deployment completed");
            }
        }, delay);
    });
}

const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

Promise.all([serverA, serverB])
    .then(results => {
        console.log("Deployment completed for all servers");
        console.log(results);
    })
    .catch(error => {
        console.log("Promise.all Error:", error);
    });

Promise.race([
    deployServer("Server A", 2000),
    deployServer("Server B", 3000)
])
    .then(result => {
        console.log("Fastest response:", result);
    })
    .catch(error => {
        console.log("Promise.race Error:", error);
    });

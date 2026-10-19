
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25, num2 = 0;

class InvalidOperationError extends Error {
    constructor(operation) {
        super(`Invalid operation: ${operation}`);
        this.name = "InvalidOperationError";
    }
}

for (const operation of operations) {
    try {
        let result;

        switch (operation) {
            case "add":
                result = num1 + num2;
                break;

            case "divide":
                if (num2 === 0) {
                    throw new Error("Cannot divide by zero");
                }
                result = num1 / num2;
                break;

            case "power":
                result = num1 ** num2;
                break;

            case "root":
                if (num1 < 0) {
                    throw new Error("Cannot find square root of a negative number");
                }
                result = Math.sqrt(num1);
                break;

            case "subtract":
                result = num1 - num2;
                break;

            default:
                throw new InvalidOperationError(operation);
        }

        console.log(`Operation: ${operation}`);
        console.log(`Numbers: ${num1}, ${num2}`);
        console.log(`Result: ${result}`);
        console.log("------------------------");

    } catch (error) {
        console.log(`Operation: ${operation}`);
        console.log(`Error Type: ${error.name}`);
        console.log(`Message: ${error.message}`);
        console.log("------------------------");
    }
}

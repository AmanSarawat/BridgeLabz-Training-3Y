
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const valid = [];
const invalid = [];

for (let i = 0; i < transactions.length; i++) {
    try {
        const transaction = transactions[i];

        if (transaction === null) {
            throw new Error("NULL_ENTRY");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new Error("MISSING_PROPERTY");
        }

        if (transaction.amount < 0) {
            throw new Error("NEGATIVE_AMOUNT");
        }

        valid.push(transaction);
        console.log(`Transaction ID: ${transaction.id} - Valid`);

    } catch (error) {
        invalid.push({
            transaction: transactions[i],
            errorType: error.message
        });

        console.log(`Transaction ${i + 1} - Invalid: ${error.message}`);
    }
}

console.log("\n----- Transaction Report -----");

console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);

console.log(`Successful count: ${valid.length}`);
console.log(`Failed count: ${invalid.length}`);

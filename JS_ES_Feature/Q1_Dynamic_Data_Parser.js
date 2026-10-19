
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumbers = [];
const invalidNumbers = [];

for (let i = 0; i < apiData.length; i++) {
    const value = apiData[i];

    const num = Number(value);
    const bool = Boolean(value);
    const str = String(value);

    console.log(`\nValue: ${str}`);
    console.log(`Number: ${num}`);
    console.log(`Boolean: ${bool}`);
    console.log(`String: ${str}`);

    if (value === null || value === undefined || str.trim() === "" || !Number.isFinite(num)) {
        invalidNumbers.push(value);
        console.log("Status: Invalid number");
    } else {
        validNumbers.push(num);
        console.log("Status: Valid number");
    }
}

console.log("\nValid numeric data:", validNumbers);
console.log("Invalid data:", invalidNumbers);

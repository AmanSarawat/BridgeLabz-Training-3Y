
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const clean = [];
const under18 = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        const data = JSON.parse(rawData[i]);

        if (data.user === undefined || data.age === undefined) {
            throw new Error("Missing user or age key");
        }

        const age = Number(data.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age");
        }

        const user = {
            user: data.user,
            age: age
        };

        clean.push(user);

        if (age < 18) {
            under18.push(user);
        }

    } catch (error) {
        console.log(`Line ${i + 1}: ${error.message}`);
    }
}

console.log("Clean data:", clean);
console.log("Under-18 users:", under18);
console.log("Valid entries:", clean.length);
console.log("Invalid entries:", rawData.length - clean.length);


function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

function double(number) {
    return number * 2;
}

function square(number) {
    return number * number;
}

console.log("Doubled numbers:", applyOperation([1, 2, 3, 4], double));
console.log("Squared numbers:", applyOperation([1, 2, 3, 4], square));


"use strict";

function demo(a, b) {
    let total = a + b;
    console.log(`a = ${a}, b = ${b}, total = ${total}`);
}

demo(5, 10);

const data = { total: 10 };
delete data.total;
console.log(data);


let count = 0;

function increment() {
    count++;
    console.log("Count:", count);
}

function decrement() {
    count--;
    console.log("Count:", count);
}

function counterStatus() {
    function showCount() {
        console.log("Current Count:", count);
    }

    showCount();
}

increment();
increment();
increment();
decrement();
counterStatus();

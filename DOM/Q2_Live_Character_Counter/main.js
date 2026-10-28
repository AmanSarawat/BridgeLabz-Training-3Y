
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const maxChars = 100;

message.addEventListener("keydown", function (event) {
    if (message.value.length >= maxChars &&
        event.key.length === 1 &&
        !event.ctrlKey && !event.metaKey) {
        event.preventDefault();
    }
});

message.addEventListener("input", function () {
    const remaining = maxChars - message.value.length;

    counter.textContent = "Remaining characters: " + remaining;

    if (remaining === 0) {
        counter.style.color = "red";
    } else if (remaining <= 20) {
        counter.style.color = "goldenrod";
    } else {
        counter.style.color = "green";
    }
});

resetBtn.addEventListener("click", function () {
    message.value = "";
    counter.textContent = "Remaining characters: 100";
    counter.style.color = "green";
});

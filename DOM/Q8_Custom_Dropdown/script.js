
const dropdown = document.getElementById("dropdown");
const dropdownBtn = document.getElementById("dropdownBtn");
const options = document.getElementById("options");

dropdownBtn.addEventListener("click", function () {
    options.hidden = !options.hidden;
});

options.addEventListener("click", function (event) {
    if (event.target.classList.contains("option")) {
        dropdownBtn.textContent = event.target.textContent + " ▼";
        options.hidden = true;
    }
});

document.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
        options.hidden = true;
    }
}, true);

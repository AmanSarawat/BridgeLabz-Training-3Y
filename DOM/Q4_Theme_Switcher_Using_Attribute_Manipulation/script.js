
const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");
const blueBtn = document.getElementById("blueBtn");

function changeTheme(theme) {
    document.body.setAttribute("class", theme);
    document.body.setAttribute("data-theme", theme);
}

lightBtn.addEventListener("click", function () {
    changeTheme("light");
});

darkBtn.addEventListener("click", function () {
    changeTheme("dark");
});

blueBtn.addEventListener("click", function () {
    changeTheme("blue");
});
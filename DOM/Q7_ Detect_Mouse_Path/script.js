
const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");

box.addEventListener("mousemove", function (event) {
    coordinates.textContent =
        "clientX: " + event.clientX +
        ", clientY: " + event.clientY;
});

box.addEventListener("dblclick", function (event) {
    const rect = box.getBoundingClientRect();

    const x = event.clientX - rect.left - box.clientLeft;
    const y = event.clientY - rect.top - box.clientTop;

    const dot = document.createElement("div");
    dot.className = "dot";

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    box.appendChild(dot);
});

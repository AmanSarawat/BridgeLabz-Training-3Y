
const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

gallery.addEventListener("click", function (event) {
    if (event.target.tagName === "IMG") {
        modalImage.src = event.target.src;
        modalImage.alt = event.target.alt;
        modal.style.display = "flex";
    }
});

modal.addEventListener("click", function () {
    modal.style.display = "none";
});

modalImage.addEventListener("click", function (event) {
    event.stopPropagation();
});

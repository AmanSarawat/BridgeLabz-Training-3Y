
const search = document.getElementById("search");
const table = document.getElementById("studentTable");
const noResults = document.getElementById("noResults");

search.addEventListener("input", function () {
    const filter = search.value.toLowerCase().trim();
    const rows = table.querySelectorAll("tr");
    let found = 0;

    rows.forEach(function (row) {
        const text = row.textContent.toLowerCase();

        if (text.includes(filter)) {
            row.style.display = "";
            found++;
        } else {
            row.style.display = "none";
        }
    });

    noResults.hidden = found !== 0;
});

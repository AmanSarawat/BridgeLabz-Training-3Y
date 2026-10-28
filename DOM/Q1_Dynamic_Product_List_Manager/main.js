
const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

addBtn.addEventListener("click", function () {
    const productName = productInput.value.trim();

    if (productName === "") {
        alert("Please enter a product name");
        return;
    }

    const li = document.createElement("li");
    const span = document.createElement("span");
    const editBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");

    span.textContent = productName;
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    editBtn.className = "editBtn";
    deleteBtn.className = "deleteBtn";

    li.append(span, editBtn, deleteBtn);
    productList.appendChild(li);

    productInput.value = "";
});

productList.addEventListener("click", function (event) {
    const li = event.target.closest("li");

    if (!li) return;

    const span = li.querySelector("span");

    if (event.target.classList.contains("deleteBtn")) {
        li.remove();
    }

    if (event.target.classList.contains("editBtn")) {
        if (li.querySelector("input")) return;

        const editInput = document.createElement("input");
        editInput.type = "text";
        editInput.value = span.textContent;

        li.replaceChild(editInput, span);
        editInput.focus();

        function saveEdit() {
            if (!editInput.isConnected) return;

            const newName = editInput.value.trim();
            const newSpan = document.createElement("span");

            newSpan.textContent = newName || span.textContent;
            li.replaceChild(newSpan, editInput);
        }

        editInput.addEventListener("blur", saveEdit);

        editInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                editInput.blur();
            }
        });
    }
});

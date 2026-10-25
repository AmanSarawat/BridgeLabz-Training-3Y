
const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const form = document.getElementById("userForm");
const output = document.getElementById("output");

function displayUser() {
    output.innerHTML = `
        <p>Name: ${user.name}</p>
        <p>Email: ${user.email}</p>
        <p>Age: ${user.age}</p>
    `;
}

displayUser();

form.addEventListener("submit", function(event) {
    event.preventDefault();

    user.name = document.getElementById("name").value;
    user.email = document.getElementById("email").value;
    user.age = Number(document.getElementById("age").value);

    displayUser();

    console.log(user);
});

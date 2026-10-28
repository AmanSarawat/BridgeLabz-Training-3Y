
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const success = document.getElementById("success");

function validateName() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        return false;
    }

    nameError.textContent = "";
    return true;
}

function validateEmail() {
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        return false;
    }

    if (!emailInput.value.includes("@")) {
        emailError.textContent = "Email must contain @";
        return false;
    }

    emailError.textContent = "";
    return true;
}

function validatePassword() {
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        return false;
    }

    passwordError.textContent = "";
    return true;
}

nameInput.addEventListener("input", function () {
    validateName();
    success.textContent = "";
});

emailInput.addEventListener("input", function () {
    validateEmail();
    success.textContent = "";
});

passwordInput.addEventListener("input", function () {
    validatePassword();
    success.textContent = "";
});

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const validName = validateName();
    const validEmail = validateEmail();
    const validPassword = validatePassword();

    if (validName && validEmail && validPassword) {
        success.textContent = "Form Submitted Successfully";
    } else {
        success.textContent = "";
    }
});


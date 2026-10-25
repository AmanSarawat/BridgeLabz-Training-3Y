
const form = document.getElementById("loginForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const usernamePattern = /^.{5,}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S{8,}$/;

    if (!usernamePattern.test(username)) {
        message.textContent = "Username must be at least 5 characters.";
        message.style.color = "red";
    } else if (password.length < 8) {
        message.textContent = "Password must be at least 8 characters.";
        message.style.color = "red";
    } else if (!/[0-9]/.test(password)) {
        message.textContent = "Password must contain at least one number.";
        message.style.color = "red";
    } else if (!/[A-Z]/.test(password)) {
        message.textContent = "Password must contain an uppercase letter.";
        message.style.color = "red";
    } else if (!/[a-z]/.test(password)) {
        message.textContent = "Password must contain a lowercase letter.";
        message.style.color = "red";
    } else if (!/[^A-Za-z0-9\s]/.test(password)) {
        message.textContent = "Password must contain a special character.";
        message.style.color = "red";
    } else {
        message.textContent = "Login validation successful!";
        message.style.color = "green";
    }
});

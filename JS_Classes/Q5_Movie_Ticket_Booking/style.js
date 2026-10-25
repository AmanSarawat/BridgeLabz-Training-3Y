
const form = document.getElementById("bookingForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const error = document.getElementById("error");
    const ticket = document.getElementById("ticket");

    error.textContent = "";
    ticket.innerHTML = "";

    if (!namePattern.test(name)) {
        error.textContent = "Name must contain alphabets only.";
    } else if (!emailPattern.test(email)) {
        error.textContent = "Please enter a valid email.";
    } else if (seats < 1 || seats > 10 || !Number.isInteger(seats)) {
        error.textContent = "Seats must be between 1 and 10.";
    } else {
        const booking = {
            name: name,
            email: email,
            seats: seats
        };

        ticket.innerHTML = `
            <h3>Booking Successful!</h3>
            <p>Name: ${booking.name}</p>
            <p>Email: ${booking.email}</p>
            <p>Seats: ${booking.seats}</p>
        `;

        console.log(booking);
    }
});

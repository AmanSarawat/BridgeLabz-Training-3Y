
const steps = document.querySelectorAll(".step");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const error = document.getElementById("error");
const summary = document.getElementById("summary");

let currentStep = 0;

function showStep() {
    steps.forEach((step, index) => {
        step.hidden = index !== currentStep;
    });

    backBtn.hidden = currentStep === 0;
    nextBtn.textContent = currentStep === steps.length - 1
        ? "Submit"
        : "Next";

    error.textContent = "";
}

function validateStep() {
    const input = steps[currentStep].querySelector("input");

    if (input.value.trim() === "") {
        error.textContent = "This field is required.";
        return false;
    }

    if (!input.checkValidity()) {
        error.textContent = "Please enter valid information.";
        return false;
    }

    return true;
}

nextBtn.addEventListener("click", function () {
    if (!validateStep()) return;

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
    } else {
        document.getElementById("myForm").hidden = true;
        summary.hidden = false;

        document.getElementById("summaryName").textContent =
            "Name: " + document.getElementById("name").value;

        document.getElementById("summaryEmail").textContent =
            "Email: " + document.getElementById("email").value;

        document.getElementById("summaryPassword").textContent =
            "Password: " + "*".repeat(
                document.getElementById("password").value.length
            );
    }
});

backBtn.addEventListener("click", function () {
    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

showStep();

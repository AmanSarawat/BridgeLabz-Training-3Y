
class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let formHTML = "<form id='myForm'>";

        this.fields.forEach(field => {
            formHTML += `
                <label>${field.label}</label><br>
                <input type="${field.type}" name="${field.name}" required>
                <br><br>
            `;
        });

        formHTML += "<button type='submit'>Submit</button>";
        formHTML += "</form>";

        document.getElementById("formContainer").innerHTML = formHTML;

        document.getElementById("myForm").addEventListener("submit", event => {
            event.preventDefault();

            const formData = this.getFormData();
            console.log(formData);

            document.getElementById("formContainer").innerHTML +=
                "<p>Form submitted successfully!</p>";
        });
    }

    getFormData() {
        const form = document.getElementById("myForm");
        const data = {};

        this.fields.forEach(field => {
            data[field.name] = form.elements[field.name].value;
        });

        return data;
    }
}

const fields = [
    { type: "text", label: "Username", name: "username" },
    { type: "email", label: "Email", name: "email" },
    { type: "password", label: "Password", name: "password" },
    { type: "number", label: "Age", name: "age" }
];

const builder = new FormBuilder(fields);
builder.createForm();

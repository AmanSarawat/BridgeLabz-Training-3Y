
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

function Faculty(name, subject) {
    Person.call(this, name);
    this.subject = subject;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showSubject = function() {
    console.log("Subject: " + this.subject);
};

function Professor(name, subject, department) {
    Faculty.call(this, name, subject);
    this.department = department;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showDepartment = function() {
    console.log("Department: " + this.department);
};

const professor1 = new Professor("Aman", "Computer Science", "CSE");

professor1.showName();
professor1.showSubject();
professor1.showDepartment();

console.log(professor1 instanceof Professor);
console.log(professor1 instanceof Faculty);
console.log(professor1 instanceof Person);

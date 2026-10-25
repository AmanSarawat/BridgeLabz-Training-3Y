
class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        this.salary = this.salary + (this.salary * percent / 100);
    }
}

const employees = [
    new Employee(1, "Aman", "IT", 30000),
    new Employee(2, "Rahul", "HR", 25000),
    new Employee(3, "Priya", "Finance", 40000),
    new Employee(4, "Neha", "IT", 35000),
    new Employee(5, "Rohit", "Sales", 28000)
];

employees[0].applyBonus(10);

console.log("Employee Annual Salaries:");

employees.forEach(employee => {
    console.log(
        employee.name + " - Annual Salary: ₹" +
        employee.getAnnualSalary()
    );
});

const totalPayout = employees.reduce((total, employee) => {
    return total + employee.getAnnualSalary();
}, 0);

console.log("Total Annual Payout: ₹" + totalPayout);

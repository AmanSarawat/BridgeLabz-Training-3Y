
let bonus = 5000;

function calculateSalary() {
    let salary = 40000;
    let isPermanent = true;
    let totalSalary;

    if (isPermanent === true) {
        totalSalary = salary + bonus;
    } else {
        totalSalary = salary;
    }

    console.log("Permanent Employee:", isPermanent);
    console.log("Total Salary:", totalSalary);
}

calculateSalary();

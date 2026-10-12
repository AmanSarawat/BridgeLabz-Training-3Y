let userName = "Aman";
let age = 22;
let isStudent = true;
let subjects = ["HTML", "CSS", "JavaScript"];
let user = { name: "Aman", age: 22 };
let emptyValue = null;
let undefinedValue;

console.table([
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "Age", Value: age, Type: typeof age },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Subjects", Value: subjects, Type: Array.isArray(subjects) ? "array" : typeof subjects },
    { Label: "User Object", Value: JSON.stringify(user), Type: typeof user },
    { Label: "Empty Value", Value: emptyValue, Type: "null" },
    { Label: "Undefined Value", Value: undefinedValue, Type: typeof undefinedValue }
]);
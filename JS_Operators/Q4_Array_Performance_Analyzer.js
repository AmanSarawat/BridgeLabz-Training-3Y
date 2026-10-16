
let scores = Array.from({ length: 8 }, () =>
    Math.floor(Math.random() * 71) + 30
);

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

let averageScore = scores.reduce((sum, score) =>
    sum + score, 0
) / scores.length;

let passedStudents = scores.filter(score => score >= 50);

let result = `
Array Performance Analyzer
Scores: ${scores.map(score => score).join(", ")}
Highest Score: ${highestScore}
Lowest Score: ${lowestScore}
Average Score: ${averageScore.toFixed(2)}
Students Passed: ${passedStudents.length}
Students Failed: ${scores.length - passedStudents.length}
`;

console.log(result);

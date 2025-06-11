const student = require("fs").readFileSync("/dev/stdin").toString().split("\n").map(Number)

const submit = new Set(student)
const allStudent = new Array(30).fill().map((_, i) => i + 1);

const nosubmit = allStudent.filter((num) => !submit.has(num))

console.log(nosubmit.sort((a,b) => a-b).join("\n"))
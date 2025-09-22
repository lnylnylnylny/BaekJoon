const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");
const num = input.map(num => Number(num.split("").reverse().join("")))
console.log(Math.max(...num))
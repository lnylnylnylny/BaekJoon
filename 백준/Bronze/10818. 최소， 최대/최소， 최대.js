const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const num = input[1].split(" ").map(Number);
console.log(Math.min(...num), Math.max(...num));

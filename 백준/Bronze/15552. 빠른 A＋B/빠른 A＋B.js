let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let result = [];

for (let i = 1; i <= input[0]; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  result.push(a + b);
}
console.log(result.join("\n"));
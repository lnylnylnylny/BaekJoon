const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const test = Number(input[0]);

for (let i = 1; i <= test; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  console.log(a + b);
}
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

const remain = [];

for (let i = 0; i < 10; i++) {
  remain.push(input[i] % 42);
}

const answer = new Set(remain)
console.log(answer.size);

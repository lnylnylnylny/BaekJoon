const num = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let remain = new Set();

for (let i = 0; i < 10; i++) {
  remain.add(num[i] % 42);
}


console.log(remain.size);
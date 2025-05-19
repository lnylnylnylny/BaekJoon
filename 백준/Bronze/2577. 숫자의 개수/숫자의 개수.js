const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);

let numAnswer = input[0] * input[1] * input[2];
let stringAnswer = String(numAnswer);
let cnt = Array(10).fill(0);

for (let i of stringAnswer) {
  cnt[Number(i)]++;
}

for (let i = 0; i < 10; i++) {
  console.log(cnt[i]);
}

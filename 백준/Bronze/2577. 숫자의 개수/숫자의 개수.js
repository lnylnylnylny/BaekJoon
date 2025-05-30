const num = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map(Number);
let mult = num[0] * num[1] * num[2];
let Stringmult = String(mult);
let cnt = Array(10).fill(0);

for (let i of Stringmult) {
  cnt[i]++;
}

for (let i = 0; i < 10; i++) {
  console.log(cnt[i]);
}
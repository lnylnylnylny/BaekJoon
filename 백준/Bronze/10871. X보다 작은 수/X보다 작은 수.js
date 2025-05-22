const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const a = input[0].split(" ");
const b = input[1].split(" ");

const cnt = Number(a[0]);
const maxNum = Number(a[1]);
const answer = [];

for (let i = 0; i < cnt; i++) {
  if (Number(b[i]) < maxNum) answer.push(b[i]);
}

console.log(answer.join(" "));

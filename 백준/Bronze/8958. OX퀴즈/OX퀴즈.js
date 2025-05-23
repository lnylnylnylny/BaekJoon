const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const testCnt = Number(input[0]);

for (let i = 1; i <= testCnt; i++) {
  let score = 0;
  let cnt = 0;
  let str = input[i];
  for (let j = 0; j < str.length; j++) {
    if(str[j] === 'O') cnt++
    else cnt = 0
    score += cnt
  }
  console.log(score)
}

const [cnt, num, findNumArr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n");

const numArr = num.split(" ").map(Number);
const findNum = Number(findNumArr);

let answer = numArr.filter((e) => e === findNum).length;

console.log(answer);
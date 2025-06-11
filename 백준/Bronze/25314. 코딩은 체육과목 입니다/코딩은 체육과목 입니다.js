const num = Number(require("fs").readFileSync("/dev/stdin").toString());
const byte = num / 4;
const answer = "long ".repeat(byte) + "int";
console.log(answer);
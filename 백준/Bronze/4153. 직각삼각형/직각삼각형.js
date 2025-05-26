const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  let [a, b, c] = input[i].split(" ").map(Number);
  if (a === 0 && b === 0 && c === 0) break;
  [a, b, c] = [a, b, c].sort((x, y) => x - y);
  console.log(a * a + b * b === c * c ? "right" : "wrong");
}
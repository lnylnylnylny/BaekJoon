const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const [time, text] = input[i].split(" ");

  if (!time || !text) continue;

  let answer = "";

  for (let char of text) {
    answer += char.repeat(Number(time));
  }

  console.log(answer);
}

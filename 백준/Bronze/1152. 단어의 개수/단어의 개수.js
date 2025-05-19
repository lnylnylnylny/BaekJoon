const input = require("fs").readFileSync("/dev/stdin").toString();

let word = input.trim().split(" ");
let cnt = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] !== "") cnt++;
}

console.log(cnt);

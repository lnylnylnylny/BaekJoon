let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");


for (let i = 1; i <= Number(input[0]); i++) {
  let [num, word] = input[i].split(" ");
  let answer = "";

  for (let j = 0; j < word.length; j++) {
    answer += word[j].repeat(Number(num));
  }

  console.log(answer);
}
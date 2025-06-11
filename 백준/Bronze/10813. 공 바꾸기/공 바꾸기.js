const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [basket, num] = input[0].split(" ").map(Number);
let basketArr = new Array(basket).fill().map((_, index) => index + 1);

for (let i = 1; i <= num; i++) {
  let [a, b] = input[i].split(" ").map(Number);

  const temp = basketArr[a - 1]
  basketArr[a - 1] = basketArr[b - 1];
  basketArr[b - 1] = temp;
}

console.log(basketArr.join(" "));
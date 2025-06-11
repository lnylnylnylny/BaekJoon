const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [basket, m] = input[0].split(" ").map(Number);
let basketArr = new Array(basket).fill().map((_, i) => i + 1);

for (let i = 1; i <= m; i++) {
  const [start, end] = input[i].split(" ").map(Number);

  const sliceArr = basketArr.slice(start - 1, end).reverse();
  for (let j =0; j <sliceArr.length; j++) {
    basketArr[start-1 +j] = sliceArr[j]
  }
}
console.log(basketArr.join(" "));
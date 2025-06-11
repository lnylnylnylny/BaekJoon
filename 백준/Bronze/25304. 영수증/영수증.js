const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const price = Number(input[0]);
const num = Number(input[1]);
let totalPrice = 0;

for (let i = 2; i <= num + 1; i++) {
  const [itemPrice, itemNum] = input[i].split(" ").map(Number);
  totalPrice += itemPrice * itemNum;
}

if (totalPrice == price) console.log("Yes");
else console.log("No");
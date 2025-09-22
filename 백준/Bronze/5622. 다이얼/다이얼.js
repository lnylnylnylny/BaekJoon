const input = require("fs").readFileSync(0).toString().split("");
const dial = {
  3: "ABC",
  4: "DEF",
  5: "GHI",
  6: "JKL",
  7: "MNO",
  8: "PQRS",
  9: "TUV",
  10: "WXYZ",
};

let total = 0;

for (let i = 0; i < input.length; i++) {
  for (let j = 3; j <= 10; j++) {
    if (dial[j].includes(input[i])) {
      total += j;
    }
  }
}
console.log(total);
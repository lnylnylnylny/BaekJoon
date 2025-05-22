const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
const score = Number(input[0]);

if (score <= 100 && score > 89) console.log("A");
else if (score < 90 && score > 79) console.log("B");
else if (score < 80 && score > 69) console.log("C");
else if (score < 70 && score > 59) console.log("D");
else console.log("F");
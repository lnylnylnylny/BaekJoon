const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const answer1 = Number(input[0]) + Number(input[1]) - Number(input[2]);
const answer2 = Number(input[0] + input[1]) - Number(input[2]);

console.log(answer1);
console.log(answer2);
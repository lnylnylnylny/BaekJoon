const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');

let sum = 0;

for(let i=0; i<input.length; i++){
    sum += input[i] ** 2;
}
const answer = sum % 10
console.log(answer)
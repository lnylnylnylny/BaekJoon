const input = require('fs').readFileSync('/dev/stdin').toString().split('\n')

let arr = input[1].split(' ').map(Number);

const max = Math.max(...arr);
const min = Math.min(...arr)

console.log(min, max);
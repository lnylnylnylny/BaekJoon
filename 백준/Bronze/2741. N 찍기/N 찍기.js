const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const num = Number(input[0])
for(let i=1; i<=num; i++){
    console.log(i);
}
const input = require('fs').readFileSync('/dev/stdin').toString().split(' ');
const cnt = Number(input[0]);

for(let i=1; i <= 9; i++){
    answer = cnt * i;
    console.log(`${cnt} * ${i} = ${answer}`);
}
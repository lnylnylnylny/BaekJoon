const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
    const ans = input[i].split(' ');
    console.log(Number(ans[0]) + Number(ans[1]));
}
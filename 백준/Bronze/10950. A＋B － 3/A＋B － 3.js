const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const cnt = Number(input[0]);

for (let i = 1; i <= cnt; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    console.log(a + b);
}

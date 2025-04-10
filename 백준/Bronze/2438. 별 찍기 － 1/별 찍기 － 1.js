const input = require('fs').readFileSync('./dev/stdin').toString();
cnt = Number(input);

for(let i = 1; i <=cnt; i++){
    console.log('*'.repeat(i));
}

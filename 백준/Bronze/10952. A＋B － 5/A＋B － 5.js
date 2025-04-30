const input= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

for(let i = 0; i<input.length;i++) {
    const [num1,num2] = input[i].split(' ')
    if (num1>0 && num2 > 0){
        console.log(Number(num1)+Number(num2))
    } 
    else continue;
}
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n")
let answer = 0
for(let i =0; i<Number(input[0]); i++) {
    const num = input[1].split("")
    answer += Number(num[i])
}
console.log(answer)
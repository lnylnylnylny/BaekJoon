let [cnt, score] = require("fs").readFileSync("/dev/stdin").toString().split("\n")

let originScore = score.split(" ").map(Number)
let maxScore = Math.max(...originScore)

let newScore = originScore.map((s) => (s /maxScore) * 100)

let sum = newScore.reduce((acc, cur) => acc+cur , 0)

let avg = sum/Number(cnt)

console.log(avg)
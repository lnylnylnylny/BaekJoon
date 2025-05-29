const stars = Number(require("fs").readFileSync("/dev/stdin").toString())
for (let i = 1; i<=stars; i++) {
    const spaces = " ".repeat(stars-i)
    const star = "*".repeat(i) 
    console.log(spaces + star)
}
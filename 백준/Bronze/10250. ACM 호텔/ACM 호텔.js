const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

for (let i = 1; i <= Number(input[0]); i++) {
  let [h, w, n] = input[i].split(" ").map(Number);
  let floor = (n % h === 0 ? h : n % h)
  let roomNum = Math.ceil(n/h)

  let room = floor * 100 + roomNum

  console.log(room);
}
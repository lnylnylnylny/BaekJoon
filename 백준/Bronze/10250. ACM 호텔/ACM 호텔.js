const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let testcnt = Number(input[0]);

for (let i = 1; i <= testcnt; i++) {
  let [h, w, n] = input[i].split(" ").map(Number);

  let floor = n % h === 0 ? h : n % h;
  let room = Math.ceil(n / h);

  let roomNum = floor * 100 + room;

  console.log(roomNum);
}

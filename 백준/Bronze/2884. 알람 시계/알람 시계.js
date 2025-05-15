const input = require("fs").readFileSync("/dev/stdin").toString().split(" ").map(Number);

let hour = input[0];
let minute = input[1];

let time = minute - 45;

if (time < 0) {
  time += 60;
  hour -= 1;
} else if (time >= 60) {
  time = 0;
  hour += 1;
}

if (hour >= 24) {
  hour -= 24;
} else if (hour < 0) {
  hour += 24;
}

console.log(hour, time);

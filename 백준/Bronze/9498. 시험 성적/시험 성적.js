// let input = require("fs").readFileSync("9498.txt").toString();
let input = require("fs").readFileSync("dev/stdin").toString();

if (input >= 90) {
  console.log("A");
} else if (input >= 80) {
  console.log("B");
} else if (input >= 70) {
  console.log("C");
} else if (input >= 60) {
  console.log("D");
} else {
  console.log("F");
}

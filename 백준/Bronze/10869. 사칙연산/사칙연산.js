let input = require("fs").readFileSync("dev/stdin").toString().split(" ");
// let input = require("fs").readFileSync("10869.txt").toString().split(" ");

const num0 = parseInt(input[0]);
const num1 = parseInt(input[1]);

console.log(num0 + num1);
console.log(num0 - num1);
console.log(num0 * num1);
console.log(Math.floor(num0 / num1));
console.log(num0 % num1);

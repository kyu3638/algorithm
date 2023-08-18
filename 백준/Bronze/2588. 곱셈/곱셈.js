// let input = require("fs").readFileSync("2588.txt").toString().split("\n");
let input = require("fs").readFileSync("dev/stdin").toString().split("\n");

const num0 = input[0];
const num1 = input[1];

const sum2 = Number(num0) * Number(num1[2]);
const sum1 = Number(num0) * Number(num1[1]);
const sum0 = Number(num0) * Number(num1[0]);
const answer = sum0 * 100 + sum1 * 10 + sum2;

console.log(sum2);
console.log(sum1);
console.log(sum0);
console.log(answer);

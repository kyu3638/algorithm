// let input = require('fs').readFileSync('1085.txt').toString().split(' ');
let input = require('fs').readFileSync('dev/stdin').toString().split(' ');

for (let i = 0; i < input.length; i++) {
  input[i] = parseInt(input[i]);
}
// input = [x,y,w,h];

const distance = [];
distance.push(input[0]);
distance.push(input[1]);
distance.push(input[2] - input[0]);
distance.push(input[3] - input[1]);

console.log(Math.min.apply(null, distance));

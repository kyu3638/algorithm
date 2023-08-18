// let input = require('fs').readFileSync('2438.txt').toString();
let input = require('fs').readFileSync('dev/stdin').toString();

let star = '';
for (let i = 0; i < parseInt(input); i++) {
  star += '*';
  console.log(star);
}

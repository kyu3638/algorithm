// let input = require('fs').readFileSync('2675.txt').toString().split('\n');
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

T = input[0];

let test = 1;

while (test <= T) {
  const [num, word] = input[test].split(' ');
  let answer = [];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < Number(num); j++) {
      answer.push(word[i]);
    }
  }
  console.log(answer.join(''));
  test++;
}

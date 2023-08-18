// let input = require('fs').readFileSync('8958.txt').toString().split('\n');
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
  let quiz = input[i].split('');
  let accumulatedScore = 0;
  let totalScore = 0;
  for (let j = 0; j < quiz.length; j++) {
    if (quiz[j] === 'O') {
      accumulatedScore += 1;
      totalScore += accumulatedScore;
    } else {
      accumulatedScore = 0;
    }
  }
  console.log(totalScore);
}

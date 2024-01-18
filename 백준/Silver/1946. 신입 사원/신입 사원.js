const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
// const inputRead = require('fs').readFileSync(filePath).toString().trim().split('\n');
// const input = function () {
//   return inputRead.shift();
// };

const answer = [];
const T = +input[0];
let index = 1;
for (let i = 0; i < T; i++) {
  const N = +input[index++];
  const scores = [];
  const startIndex = index;
  for (index = index; index < startIndex + N; index++) {
    scores.push(input[index].split(' ').map(Number));
  }
  const total = scores.length;

  scores.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let top = scores[0][1];
  let lose = 0;
  for (let j = 0; j < scores.length; j++) {
    if (scores[j][1] < top) top = scores[j][1];
    else if (scores[j][1] > top) lose++;
  }

  answer.push(total - lose);
}

console.log(answer.join('\n'));

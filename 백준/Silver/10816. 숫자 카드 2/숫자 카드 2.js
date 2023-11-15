const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

// 상근이가 가진 카드 개수
const N = Number(input.shift());
// 상근이 보유한 카드
const cards = input
  .shift()
  .split(' ')
  .map(v => Number(v))
  .sort((a, b) => a - b);
// 상근이 가졌는지 확인해야하는 카드의 수
const M = Number(input.shift());
// 상근이가 몇 개 가지고 있는 숫자 카드인지 구해야 할 M개의 정수
const arr = input
  .shift()
  .split(' ')
  .map(v => Number(v));

// 카드의 형태를 [[카드숫자, 개수],[카드숫자, 개수], ...] 로 변형
const cardsEdit = [[cards[0], 1]];
for (let i = 1; i < cards.length; i++) {
  if (cards[i] === cards[i - 1]) {
    cardsEdit[cardsEdit.length - 1][1]++;
  } else {
    cardsEdit.push([cards[i], 1]);
  }
}

const answer = [];

arr.forEach(num => {
  let start = 0;
  let end = cardsEdit.length - 1;
  let mid;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (num === cardsEdit[mid][0]) {
      answer.push(cardsEdit[mid][1]);
      break;
    } else if (num < cardsEdit[mid][0]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
    if (start > end) answer.push(0);
  }
});

console.log(...answer);

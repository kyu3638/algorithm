// let input = require('fs')
//   .readFileSync('2577.txt')
//   .toString()
//   .split('\n')
//   .map((v) => Number(v));
let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split('\n')
  .map((v) => Number(v));

// 곱해진 숫자 구하고,,
let number = input[0] * input[1] * input[2];

// numberArray 만들어서 각 자리수를 확인할 수 있도록 배열에 넣어주고
let numberArray = [];
numberArray = number.toString().split('');

// 정답을 넣을 배열
let answer = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let i = 0; i < numberArray.length; i++) {
  answer[Number(numberArray[i])] += 1;
}

for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
}

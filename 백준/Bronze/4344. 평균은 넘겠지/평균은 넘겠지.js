// let input = require('fs').readFileSync('4344.txt').toString().split('\n');
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

// console.log(input);

const T = input[0];

// 전체 테스트 케이스 갯수만큼 반복
for (let i = 1; i <= T; i++) {
  // 학생들의 숫자와 점수들을 담은 배열 생성
  const studentsAndScore = input[i].split(' ').map((v) => Number(v));
  // 학생의 수와 평균 점수를 구해 담을 변수 선언
  const numberOfStudents = studentsAndScore[0];
  let totalScore = 0;
  let avgScore = 0;
  for (let j = 1; j <= studentsAndScore[0]; j++) {
    totalScore += studentsAndScore[j];
  }
  avgScore = totalScore / numberOfStudents;

  // 평균을 넘는 학생들의 숫자를 담는 변수
  let count = 0;
  for (let k = 1; k <= studentsAndScore[0]; k++) {
    if (studentsAndScore[k] > avgScore) {
      count++;
    }
  }

  const answer = (count / numberOfStudents) * 100;
  console.log(`${answer.toFixed(3)}%`);
}

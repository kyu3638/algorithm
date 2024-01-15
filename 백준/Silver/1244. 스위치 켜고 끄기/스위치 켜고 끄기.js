const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const switches = input[1].split(' ').map(Number);
const lenOfStudents = +input[2];
const studentAndCommand = [];

for (let i = 3; i < 3 + lenOfStudents; i++) {
  studentAndCommand.push(input[i].split(' ').map(Number));
}

/* 남자인 경우, 여자인 경우 정비하는 함수 */
function maleChange(cardNum) {
  for (let i = cardNum; i < switches.length; i = i + cardNum + 1) {
    if (!switches[i]) switches[i] = 1;
    else switches[i] = 0;
  }
}

function femaleChange(cardNum) {
  if (!switches[cardNum]) switches[cardNum] = 1;
  else switches[cardNum] = 0;
  let index = 1;
  while (switches[cardNum - index] === switches[cardNum + index]) {
    if (!switches[cardNum - index]) {
      switches[cardNum - index] = 1;
      switches[cardNum + index] = 1;
    } else {
      switches[cardNum - index] = 0;
      switches[cardNum + index] = 0;
    }
    index++;
  }
}

for (let i = 0; i < studentAndCommand.length; i++) {
  const [gender, num] = studentAndCommand[i];
  if (gender === 1) maleChange(num - 1);
  if (gender === 2) femaleChange(num - 1);
}

while (switches.length > 0) {
  if (switches.length < 20) {
    console.log(switches.join(' '));
    break;
  }
  console.log(switches.splice(0, 20).join(' '));
}

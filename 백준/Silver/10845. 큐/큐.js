const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);

const q = [];
const answer = [];
for (let i = 1; i <= N; i++) {
  const command = input[i].split(' ');
  switch (command[0]) {
    case 'push':
      q.push(Number(command[1]));
      break;
    case 'pop':
      if (q.length) answer.push(q.shift());
      else answer.push(-1);
      break;
    case 'size':
      answer.push(q.length);
      break;
    case 'empty':
      if (q.length) answer.push(0);
      else answer.push(1);
      break;
    case 'front':
      if (q.length) answer.push(q[0]);
      else answer.push(-1);
      break;
    case 'back':
      if (q.length) answer.push(q[q.length - 1]);
      else answer.push(-1);
      break;
    default:
      break;
  }
}

console.log(answer.join('\n'));

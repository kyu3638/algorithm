const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const n = +input[0];
const tower = input[1].split(' ').map(Number);

const stack = [];
const answer = [];

for (let i = 0; i < n; i++) {
  if (!stack.length) {
    stack.push([i, tower[i]]);
    answer.push(0);
    continue;
  }

  if (stack[stack.length - 1][1] < tower[i]) {
    while (stack.length) {
      if (stack[stack.length - 1][1] < tower[i]) stack.pop();
      else break;
    }
  }

  if (stack.length) answer.push(stack[stack.length - 1][0] + 1);
  else answer.push(0);
  stack.push([i, tower[i]]);
}

console.log(answer.join(' '));

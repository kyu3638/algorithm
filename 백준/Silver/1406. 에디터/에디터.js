const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const str = input.shift().split('');
const n = +input.shift();
const stack = [];
for (let i = 0; i < n; i++) {
  let command = input[i].split(' ');
  switch (command[0]) {
    case 'L':
      if (str.length) stack.push(str.pop());
      break;
    case 'D':
      if (stack.length) str.push(stack.pop());
      break;
    case 'B':
      if (str.length > 0) str.pop();
      break;
    case 'P':
      str.push(command[1]);
      break;
  }
}
let answer = str.join('');
answer += stack.reverse().join('');

console.log(answer);

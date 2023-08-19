// let input = require('fs').readFileSync('10828.txt').toString().split('\n');
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const T = input[0];

const stk = [];
const result = [];

for (let i = 1; i <= T; i++) {
  const command = input[i].split(' ');
  switch (command[0]) {
    case 'push':
      stk.push(command[1]);
      break;
    case 'pop':
      result.push(stk.length > 0 ? Number(stk.pop()) : -1);
      break;
    case 'size':
      result.push(stk.length);
      break;
    case 'empty':
      if (stk.length === 0) {
        result.push(1);
      } else {
        result.push(0);
      }
      break;
    case 'top':
      result.push(stk.length > 0 ? Number(stk[stk.length - 1]) : -1);
      break;
  }
}
console.log(result.join('\n'));

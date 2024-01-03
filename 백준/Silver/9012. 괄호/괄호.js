const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = +input[0];

for (let i = 1; i <= N; i++) {
  const stack = [];
  let flag = true;

  for (const str of input[i]) {
    if (str === '(') {
      stack.push(str);
    } else {
      if (!stack.length) {
        flag = false;
        break;
      } else {
        stack.pop();
      }
    }
  }

  if (stack.length) flag = false;

  if (flag) console.log('YES');
  else console.log('NO');
}

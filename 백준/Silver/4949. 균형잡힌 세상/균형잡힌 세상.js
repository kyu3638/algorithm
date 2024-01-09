const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const answer = [];

for (let i = 0; i < input.length - 1; i++) {
  const stack = [];
  const str = input[i];
  let flag = true;
  for (let j = 0; j < str.length; j++) {
    // 여는 괄호인 경우 무조건 삽입
    if (str[j] === '(' || str[j] === '[') {
      stack.push(str[j]);
    }
    // 닫는 괄호인 경우 이전 괄호가 같은 형태의 여는 괄호인 경우 pop
    else if (str[j] === ')') {
      if (stack[stack.length - 1] !== '(') {
        flag = false;
        break;
      }
      stack.pop();
    } else if (str[j] === ']') {
      if (stack[stack.length - 1] !== '[') {
        flag = false;
        break;
      }
      stack.pop();
    }
  }

  if (stack.length) {
    flag = false;
  }

  if (flag) answer.push('yes');
  else answer.push('no');
}

console.log(answer.join('\n'));

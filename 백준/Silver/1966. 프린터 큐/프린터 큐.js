const filePath = process.platform === 'linux' ? 'dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const N = +input[0];
for (let i = 1; i <= N; i++) {
  let [_, targetIndex] = input[2 * i - 1].split(' ').map(v => Number(v));
  const queue = input[2 * i].split(' ').map(v => Number(v));

  let count = 0;
  while (queue.length) {
    const pop = queue.shift();
    const currentMax = Math.max(...queue);
    // 현재 max가 target인 경우
    if (pop >= currentMax && targetIndex === 0) {
      count++;
      console.log(count);
      break;
    }
    // target이 현재 max보다 작아서 뒤로 보내야 하는 경우
    else if (pop < currentMax && targetIndex === 0) {
      queue.push(pop);
      targetIndex = queue.length - 1;
    }
    // 현재 max인 경우
    else if (pop >= currentMax) {
      count++;
      targetIndex--;
    }
    // 현재 max보다 작아서 뒤로 보내야 하는 경우
    else if (pop < currentMax) {
      queue.push(pop);
      targetIndex--;
    }
  }
}

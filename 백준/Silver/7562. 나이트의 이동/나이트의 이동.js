const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  const N = Number(input.shift());
  const [startX, startY] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
  const [endX, endY] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
  const map = [...Array(N)].map(() => [...Array(N)].fill(false));
  function bfs(a, b) {
    if (startX === endX && startY === endY) return 0;
    let count = 0;
    const q = [[a, b, count]];
    map[a][b] = true;
    const dx = [-1, -2, -1, -2, 1, 2, 1, 2];
    const dy = [-2, -1, 2, 1, -2, -1, 2, 1];
    while (q.length) {
      const [x, y, count] = q.shift();
      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < N && ny >= 0 && ny < N && !map[nx][ny]) {
          map[nx][ny] = true;
          q.push([nx, ny, count + 1]);
          if (nx === endX && ny === endY) {
            return count + 1;
          }
        }
      }
    }
  }
  console.log(bfs(startX, startY));
}

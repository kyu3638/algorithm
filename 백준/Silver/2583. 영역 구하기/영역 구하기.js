const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const [M, N, K] = input
  .shift()
  .split(' ')
  .map((v) => Number(v));

const graph = [...Array(M)].map(() => Array(N).fill(false));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 0; i < K; i++) {
  const [a, b, c, d] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
  for (j = M - d; j < M - b; j++) {
    for (l = a; l < c; l++) {
      graph[j][l] = true;
    }
  }
}

function bfs(x, y) {
  let count = 1;
  q = [[x, y]];
  graph[x][y] = true;

  while (q.length) {
    const [r, t] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nx = r + dx[i];
      const ny = t + dy[i];
      if (nx >= 0 && nx < M && ny >= 0 && ny < N && !graph[nx][ny]) {
        graph[nx][ny] = true;
        q.push([nx, ny]);
        count++;
      }
    }
  }
  return count;
}
const answer = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!graph[i][j]) {
      answer.push(bfs(i, j));
    }
  }
}
console.log(answer.length);
console.log(...answer.sort((a, b) => a - b));

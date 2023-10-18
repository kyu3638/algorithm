const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// n - 세로크기, m - 가로크기
const [n, m] = input
  .shift()
  .split(' ')
  .map((v) => Number(v));

const graph = [];
for (let i = 0; i < n; i++) {
  graph.push(
    input
      .shift()
      .split(' ')
      .map((v) => Number(v))
  );
}
const visited = [...Array(n)].map(() => [...Array(m)].map(() => false));

// 그림의 개수와 그 중 가장 넓이가 넓은 것을 구할 것
// bfs로 돌면서 1의 개수를 answer에 push하고, answer 원소의 개수와 가장 큰 값을 반환해보자
// graph에서 1이고, visited에서 false인 곳에 방문하면 된다.
let answer = [];
function bfs(startX, startY) {
  const q = [[startX, startY]];
  visited[startX][startY] = true;
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  let count = 1;
  while (q.length) {
    const [r, c] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];
      if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
        if (graph[nr][nc] === 1 && !visited[nr][nc]) {
          visited[nr][nc] = true;
          q.push([nr, nc]);
          count++;
        }
      }
    }
  }
  answer.push(count);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 1 && !visited[i][j]) {
      bfs(i, j);
    }
  }
}

if (answer.length === 0) {
  console.log(0);
  console.log(0);
} else {
  console.log(answer.length);
  console.log(Math.max(...answer));
}

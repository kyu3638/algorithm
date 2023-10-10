const filePath = process.platform === 'linux' ? '/dev/stdin' : './4963.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 대각선으로 갈 수 있으므로 방향을 추가해준다.
const dx = [-1, 1, 0, 0, -1, -1, 1, 1];
const dy = [0, 0, -1, 1, -1, 1, -1, 1];

function bfs(startX, startY, graph, visited) {
  const q = [[startX, startY]];
  visited[startX][startY] = true;
  while (q.length) {
    const [x, y] = q.shift();
    for (let i = 0; i < 8; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && nx < graph.length && ny >= 0 && ny < graph[0].length) {
        if (graph[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          q.push([nx, ny]);
        }
      }
    }
  }
}

while (input.length) {
  const [c, r] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
  if (r === 0 && c === 0) break;
  const graph = [];
  for (let i = 0; i < r; i++) {
    graph.push(
      input
        .shift()
        .split(' ')
        .map((v) => Number(v))
    );
  }
  const visited = [...Array(r)].map(() => [...Array(c).fill(false)]);
  let answer = 0;

  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      if (!visited[i][j] && graph[i][j] === 1) {
        bfs(i, j, graph, visited);
        answer++;
      }
    }
  }
  console.log(answer);
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : './2468.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());

const graph = input.map((v) => v.split(' ').map((x) => Number(x)));
const safeZone = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let MAX = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    MAX = Math.max(MAX, graph[i][j]);
  }
}

// 물이 k만큼 왔을 때 안전한 곳을 확인하기 위해 k는 0~9
for (let k = 0; k < MAX; k++) {
  // 그래프에서 안전한 영역인지를 나타내기 위해 visited 배열을 만듬
  const visited = [...Array(N)].map(() => Array(N).fill(false));
  // 비가 k만큼 왔다고 하면, visited[i][j] > k인 곳만 안전
  // visited[i][j] <= k 인 모든 지역을 방문했다 치고 문제를 풀면 될 듯
  for (let i = 0; i < visited.length; i++) {
    for (let j = 0; j < visited.length; j++) {
      if (graph[i][j] <= k) {
        visited[i][j] = true;
      }
    }
  }

  function bfs(startX, startY) {
    const q = [[startX, startY]];
    visited[startX][startY] = true;

    while (q.length) {
      const [x, y] = q.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < N && ny >= 0 && ny < N) {
          if (graph[nx][ny] > k && !visited[nx][ny]) {
            visited[nx][ny] = true;
            q.push([nx, ny]);
          }
        }
      }
    }
  }

  let num = 0;
  for (let i = 0; i < visited.length; i++) {
    for (let j = 0; j < visited.length; j++) {
      if (!visited[i][j]) {
        bfs(i, j);
        num++;
      }
    }
  }
  safeZone.push(num);
}

console.log(Math.max(...safeZone));

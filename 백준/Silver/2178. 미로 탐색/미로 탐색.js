// let input = require('fs').readFileSync('2178.txt').toString().split('\n');
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

// 행, 열 정의
const [h, w] = input[0].split(' ').map((v) => Number(v));

// 미로 정의
let graph = [];
for (let i = 0; i < h; i++) {
  graph.push(input[i + 1].split('').map((v) => Number(v)));
}

// 좌표 탐색을 위한 dx, dy
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(graph, x, y) {
  let queue = [[x, y]];
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < h && ny >= 0 && ny < w) {
        if (graph[nx][ny] === 1) {
          queue.push([nx, ny]);
          graph[nx][ny] = graph[x][y] + 1;
        }
      }
    }
  }
}

bfs(graph, 0, 0);
console.log(graph[h - 1][w - 1]);

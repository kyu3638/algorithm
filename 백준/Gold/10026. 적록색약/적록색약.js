// let input = require('fs')
//   .readFileSync('10026.txt')
//   .toString()
//   .trim()
//   .split('\n');
let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');

const N = Number(input.shift());
const graph = input.map((v) => v.split(''));
const visited = [...Array(N)].map(() => new Array(N).fill(false));
const answer = [0, 0];

// 상하좌우
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(x, y, isNormal) {
  let q = [[x, y]];
  visited[x][y] = true;

  while (q.length > 0) {
    // console.log(q);
    let [x, y] = q.shift();
    // 현재의 x,y에 인접한 4곳의 좌표가 유효한지, 무슨 색이지 판별
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < N && !visited[nx][ny]) {
        // 적록색약이 없는 경우
        if (isNormal) {
          if (graph[nx][ny] === graph[x][y]) {
            visited[nx][ny] = true;
            q.push([nx, ny]);
          }
        }
        // 적록색약이 있는 경우
        else {
          // graph[nx][ny] === graph[x][y] 인 경우
          if (graph[nx][ny] === graph[x][y]) {
            visited[nx][ny] = true;
            q.push([nx, ny]);
          }
          // graph[x][y] === 'R' && graph[nx][ny] === 'G'
          else if (graph[x][y] === 'R' && graph[nx][ny] === 'G') {
            visited[nx][ny] = true;
            q.push([nx, ny]);
          }
          // graph[x][y] === 'G' && graph[nx][ny] === 'R'
          else if (graph[x][y] === 'G' && graph[nx][ny] === 'R') {
            visited[nx][ny] = true;
            q.push([nx, ny]);
          }
        }
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      bfs(i, j, true);
      answer[0]++;
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    visited[i][j] = false;
  }
}
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j]) {
      bfs(i, j, false);
      answer[1]++;
    }
  }
}

console.log(answer.join(' '));

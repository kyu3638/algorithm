const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const n = +input[0];

const map = input.slice(1).map(v => v.split('').map(Number));
const visited = [...Array(n)].map(() => [...Array(n)].map(() => false));

function bfs(startX, startY) {
  let count = 1;
  const q = [[startX, startY]];
  visited[startX][startY] = true;
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  while (q.length) {
    const [r, c, num] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];
      if (nr >= 0 && nr < n && nc >= 0 && nc < n) {
        if (map[nr][nc] === 1 && !visited[nr][nc]) {
          q.push([nr, nc]);
          count++;
          visited[nr][nc] = true;
        }
      }
    }
  }
  return count;
}

let village = 0;
const arr = [];
for (let i = 0; i < map.length; i++) {
  for (let j = 0; j < map[0].length; j++) {
    if (map[i][j] === 1 && !visited[i][j]) {
      arr.push(bfs(i, j));
      village += 1;
    }
  }
}

console.log(village);
console.log(arr.sort((a, b) => a - b).join('\n'));

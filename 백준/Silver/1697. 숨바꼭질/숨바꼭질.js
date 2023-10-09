// let input = require('fs')
//   .readFileSync('1697.txt')
//   .toString()
//   .split(' ')
//   .map((v) => Number(v));

let input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .split(' ')
  .map((v) => Number(v));

const [N, K] = input;
const visited = new Array(100001).fill(-1);

function bfs(start, destination) {
  if (start === destination) return 0;
  const q = [start];
  visited[start] = 0;

  while (q.length > 0) {
    const x = q.shift();
    const dx = [-1, 1, x];
    for (let i = 0; i < 3; i++) {
      const nx = x + dx[i];
      if (visited[nx] === -1 && nx >= 0 && nx <= 100000) {
        visited[nx] = visited[x] + 1;
        // console.log(`x : ${x}`);
        // console.log(`nx : ${nx}`);
        // console.log(`visited[nx] : ${visited[nx]}`);
        q.push(nx);
        if (nx === destination) {
          return visited[nx];
        }
      }
    }
  }
}

console.log(bfs(N, K));

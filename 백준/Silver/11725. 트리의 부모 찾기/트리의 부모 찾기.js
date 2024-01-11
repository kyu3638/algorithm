const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];

const graph = [...Array(N + 1)].map(() => []);
const answer = [...Array(N + 1)].map(() => 0);

for (let i = 1; i < N; i++) {
  const [start, end] = input[i].split(' ').map(Number);
  graph[start].push(end);
  graph[end].push(start);
}

function bfs(start) {
  const q = [start];
  answer[start] = 1;
  while (q.length) {
    const parent = q.pop();
    for (const num of graph[parent]) {
      if (answer[num] === 0) {
        q.push(num);
        answer[num] = parent;
      }
    }
  }
}

bfs(1);

console.log(answer.slice(2).join('\n'));

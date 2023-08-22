// const input = require('fs')
//   .readFileSync('18352.txt')
//   .toString()
//   .trim()
//   .split('\n');
const input = require('fs')
  .readFileSync('dev/stdin')
  .toString()
  .trim()
  .split('\n');
const [N, M, K, X] = input.shift().split(' ').map(Number);
const arr = input.map((v) => v.split(' ').map(Number));
const graph = [...Array(N + 1)].map(() => []);
const distance = Array(N + 1).fill(0);
let answer = [];

arr.map(([from, to]) => graph[from].push(to));

const bfs = (start) => {
  const queue = [start];
  distance[start] = 1;

  while (queue.length) {
    const now = queue.shift();
    if (distance[now] === K + 1) {
      answer.push(now);
      continue;
    }
    for (const next of graph[now]) {
      if (distance[next] === 0) {
        queue.push(next);
        distance[next] = distance[now] + 1;
      }
    }
  }
};

bfs(X);
if (answer.length) {
  answer.sort((a, b) => a - b);
  console.log(answer.join('\n'));
} else {
  console.log(-1);
}

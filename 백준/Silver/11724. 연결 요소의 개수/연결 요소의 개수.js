// let input = require('fs').readFileSync('11724.txt').toString().split('\n');
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const [node, edge] = input[0].split(' ').map((v) => Number(v));

let graph = [];
for (let i = 0; i <= node; i++) {
  graph.push([]);
}

for (let i = 0; i < edge; i++) {
  const [a, b] = input[i + 1].split(' ').map((v) => Number(v));
  graph[a].push(b);
  graph[b].push(a);
}

let visited_bfs = new Array(node + 1).fill(false);
function bfs(graph, start) {
  let queue = [start];
  visited_bfs[start] = true;
  while (queue.length) {
    let v = queue.shift();
    for (let i = 0; i < graph[v].length; i++) {
      if (visited_bfs[graph[v][i]] === false) {
        queue.push(graph[v][i]);
        visited_bfs[graph[v][i]] = true;
      }
    }
  }
}

let count = 0;
for (let i = 1; i <= node; i++) {
  if (!visited_bfs[i]) {
    bfs(graph, i);
    count += 1;
  }
}

console.log(count);

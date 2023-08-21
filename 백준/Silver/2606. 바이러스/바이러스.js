// let input = require('fs').readFileSync('2606.txt').toString().split('\n');
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

const node = Number(input[0]);
const edge = Number(input[1]);

// graph 초기화
let graph = [];
for (let i = 0; i <= node; i++) {
  graph.push([]);
}

// 각 노드의 관계 정리
for (let i = 0; i < edge; i++) {
  const [a, b] = input[i + 2].split(' ').map((v) => Number(v));
  graph[a].push(b);
  graph[b].push(a);
}

let visited_bfs = new Array(node + 1).fill(false);
let answer_bfs = [];
function bfs(graph, start) {
  let queue = [start];
  visited_bfs[start] = true;
  answer_bfs.push(start);
  while (queue.length) {
    let v = queue.shift();
    for (let i = 0; i < graph[v].length; i++) {
      if (visited_bfs[graph[v][i]] === false) {
        queue.push(graph[v][i]);
        visited_bfs[graph[v][i]] = true;
        answer_bfs.push(graph[v][i]);
      }
    }
  }
}
bfs(graph, 1);
console.log(answer_bfs.length - 1);

// let input = require('fs').readFileSync('1260.txt').toString().split('\n');
let input = require('fs').readFileSync('dev/stdin').toString().split('\n');

// 노드의 수, 간선의 수, 시작지점
const [node, edge, start] = input[0].split(' ').map((v) => Number(v));

// 노드의 연결정보를 저장할 인접리스트, node+1개의 빈 배열로 초기화
let graph = [];
for (let i = 0; i <= node; i++) {
  graph.push([]);
}

// 각 노드 별 상호 연결되어 있으므로 아래와 같이 연결해줌
for (let i = 0; i < edge; i++) {
  const [a, b] = input[i + 1].split(' ').map((v) => Number(v));
  graph[a].push(b);
  graph[b].push(a);
}
graph.forEach((e) => {
  e.sort((a, b) => a - b);
});
// console.log(graph);

let visited_dfs = new Array(node + 1).fill(false);
let answer_dfs = [];
function dfs(graph, start) {
  visited_dfs[start] = true;
  answer_dfs.push(start);
  for (let i = 0; i < graph[start].length; i++) {
    if (visited_dfs[graph[start][i]] === false) {
      dfs(graph, graph[start][i]);
    }
  }
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
dfs(graph, start);
bfs(graph, start);
console.log(answer_dfs.join(' '));
console.log(answer_bfs.join(' '));

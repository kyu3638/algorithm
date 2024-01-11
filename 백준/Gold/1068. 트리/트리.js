const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const nodes = input[1].split(' ').map(Number);
const R = +input[2];
const graph = [...Array(N)].map(() => []);
let root = 0;
for (let i = 0; i < nodes.length; i++) {
  if (nodes[i] === -1) {
    root = i;
    continue;
  }
  graph[nodes[i]].push(i);
}

function bfs(start) {
  // root를 삭제하면 리프노드의 수는 0 반환
  if (start === R) return 0;
  const q = [start];
  // 리프노드의 수 count
  let count = 0;
  while (q.length) {
    const x = q.shift();
    // graph[x]에 아무런 원소 없으면 리프노드이기 때문에 count++
    // graph[x]의 원소가 하나고 그게 제거할 노드라면 리프노드로 간주 count++
    if (!graph[x].length || (graph[x].length === 1 && graph[x][0] === R)) count++;
    for (let i = 0; i < graph[x].length; i++) {
      // 방문할 노드가 제거할 노드라면 continue
      if (graph[x][i] === R) continue;
      q.push(graph[x][i]);
    }
  }
  return count;
}

console.log(bfs(root));

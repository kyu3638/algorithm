const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

class DisjointSet {
  constructor(n) {
    this.parent = [...Array(n + 1)].map((_, i) => i);
  }

  find(x) {
    if (x === this.parent[x]) return x;
    this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;
    this.parent[rootX] = rootY;
  }
}

function kruskal(n, edges) {
  // n : 노드의 개수
  // edges : (노드1, 노드1, 가중치)의 배열
  // 최소 스패닝 트리의 가중치를 반환

  // 간선을 가중치 순으로 정렬
  edges.sort((a, b) => a[2] - b[2]);
  const disjointSet = new DisjointSet(n);
  let result = 0;
  let usedEdges = 0;

  // 가중치가 낮은 간선부터 선택
  for (const [idx, adj, cost] of edges) {
    // 각 노드의 부모 노드 탐색
    // 사이클이 생기지 않는다면 간선을 선택
    // 부모 노드가 같다 = 이 간선을 선택하면 사이클이 생긴다는 것!
    if (disjointSet.find(idx) !== disjointSet.find(adj)) {
      disjointSet.union(idx, adj);
      result += cost;
      usedEdges++;
      // 간선의 개수가 n-1개가 되면 탐색 종료
      if (usedEdges === n - 1) break;
    }
  }

  return result;
}

const totalNodes = +input[0];
const totalEdges = +input[1];

const edges = [];

for (let i = 2; i < 2 + totalEdges; i++) {
  edges.push(input[i].split(' ').map(Number));
}

console.log(kruskal(totalNodes, edges));

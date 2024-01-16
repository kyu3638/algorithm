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
  if (edges.length === 0) return -1;
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
  if (usedEdges < n - 1) return -1;
  return result;
}

const strToNumObj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

const n = +input[0];
const graph = [];
for (let i = 1; i < 1 + n; i++) {
  graph.push(
    input[i].split('').map(el => {
      if (el === '0') return 0;
      if (typeof el === 'string') return strToNumObj[el];
    }),
  );
}
const edges = [];
let totalLen = 0;
graph.forEach((arr, from) =>
  arr.forEach((cost, to) => {
    if (cost !== 0 && from !== to) edges.push([from + 1, to + 1, cost]);
    totalLen += cost;
  }),
);

const need = kruskal(graph[0].length, edges);

if (graph.length === 1) console.log(totalLen);
else if (need === -1) console.log(need);
else console.log(totalLen - need);

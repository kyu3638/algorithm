function bfs(n, city, start, end, mid) {
  let visited = new Array(n + 1).fill(false);
  let q = [];
  q.push(start);
  while (q.length !== 0) {
    let cur = q.shift();
    visited[cur] = true;
    if (cur === end)
      // 도착지 까지 도착.
      return true;

    for (let i = 0; i < city[cur].length; i++) {
      let next = city[cur][i][0]; // 다음 도시.
      let nextCost = city[cur][i][1];
      if (!visited[next] && mid <= nextCost) {
        visited[next] = true;
        q.push(next);
      }
    }
  }
  return false;
}

function binarySearch(n, city, start, end, max) {
  let left = 1;
  let right = max;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (bfs(n, city, start, end, mid)) {
      // 통과가능한 중량이면 중량을 올린다.
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(right);
}

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

let city = new Array(n + 1).fill(null).map(() => []);
let max = 0;

for (let i = 1; i <= m; i++) {
  let [from, to, weigth] = input[i].split(' ').map(Number);
  if (weigth > max) max = weigth;
  city[from].push([to, weigth]);
  city[to].push([from, weigth]);
}
let [start, end] = input[m + 1].split(' ').map(Number);
binarySearch(n, city, start, end, max);

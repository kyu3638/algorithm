const { group } = require('console');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

// 모든 사람들이 최대 6단계 이내에서 서로 아는 사람으로 연결되어 있다고 함]

// 케빈 베이컨 : 미국 헐리우드 영화배우들 끼리 케빈 베이컨 게임을 했을 때 나오는 단계의 총합이 가장 적은 사람

// 케빈 베이컨 수는 모든 살마과 케빈 베이컨 게임을 했을 때 나오는 단계의 합

// N - 유저의 수
// M - 관계의 수

const [N, M] = input
  .shift()
  .split(' ')
  .map((v) => Number(v));

// 각 사람의 케빈 베이컨 수를 담을 배열, 인덱스에 맞게 담을 것
const answer = [];

const graph = [...Array(N + 1)].map(() => []);
for (let i = 0; i < M; i++) {
  const [a, b] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
  graph[a].push(b);
  graph[b].push(a);
}

// bfs 함수를 만들건데, 시작할 번호를 인자로 받고,
// 그래프를 순회하면서 만나는 다른 번호를 몇번만에 받았는지 체크해야함
function bfs(start) {
  // 함수를 여러번 실행해야하니까 visited를 그냥 함수 안에 선언
  const visited = [...Array(N + 1)].map(() => false);
  // start에서 각 index까지 몇번에 갔는지 체크하기 위한 배열
  const distance = [...Array(N + 1)].map(() => 0);
  // 몇번째로 방문했는지 체크하기 위한 count
  const q = [[start, distance[start]]];
  visited[start] = true;
  while (q.length) {
    const x = q.shift()[0];
    for (let i = 0; i < graph[x].length; i++) {
      if (!visited[graph[x][i]]) {
        visited[graph[x][i]] = true;
        q.push([graph[x][i], distance[x] + 1]);
        distance[graph[x][i]] = distance[x] + 1;
      }
    }
  }
  let temp = 0;
  for (let i = 0; i < distance.length; i++) {
    temp += distance[i];
  }
  answer.push(temp);
}

for (let i = 1; i <= N; i++) {
  bfs(i);
}
// answer에서 가장 작은 수
const min = Math.min(...answer);
// min에 해당하는 index
console.log(answer.indexOf(min) + 1);

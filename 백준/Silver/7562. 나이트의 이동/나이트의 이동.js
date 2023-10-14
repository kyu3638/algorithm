const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 테스트의 수
const T = Number(input.shift());

for (let i = 0; i < T; i++) {
  // 체스판의 크기
  const N = Number(input.shift());
  // 시작 좌표
  const [startX, startY] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
  // 도착 좌표
  const [endX, endY] = input
    .shift()
    .split(' ')
    .map((v) => Number(v));
  // 체스판을 초기화
  const map = [...Array(N)].map(() => [...Array(N)].fill(false));
  // 시작점을 인자로 받는 bfs함수 구현
  function bfs(a, b) {
    // 시작점이 도착점이면 0반환
    if (startX === endX && startY === endY) return 0;
    // 몇번째 움직임인지 체크하는 변수
    let count = 0;
    const q = [[a, b, count]];
    map[a][b] = true;
    // 이동 좌표
    const dx = [-1, -2, -1, -2, 1, 2, 1, 2];
    const dy = [-2, -1, 2, 1, -2, -1, 2, 1];
    while (q.length) {
      const [x, y, count] = q.shift();
      for (let i = 0; i < 8; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (nx >= 0 && nx < N && ny >= 0 && ny < N && !map[nx][ny]) {
          map[nx][ny] = true;
          // 이전 까지의 움직임에 +1 만큼 이동했음을 표시
          q.push([nx, ny, count + 1]);
          // 이동하는 곳이 도착점이면 반환(count 증가하기 전이므로 count+1 반환)
          if (nx === endX && ny === endY) {
            return count + 1;
          }
        }
      }
    }
  }
  console.log(bfs(startX, startY));
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 벨트를 회전시킬 때 : 내구도 감소 없이 로봇과 내구도 배열 모두 이동
function moveBelt() {
  robots.pop();
  robots.unshift(0); // 로봇이 내리고 벨트가 돌아오므로 무조건 0 삽입
  durability.unshift(durability.pop());
}

// 로봇을 회전시킬 때 : 로봇을 이동시키고, 이동한 장소의 내구도를 1 감소시킴
// 이동할 수 없다면 가만히 있는다.
function moveRobot() {
  for (let i = N - 1; i > 0; i--) {
    // 이전 벨트에 로봇이 없다면 continue;
    if (!robots[i - 1]) continue;
    // 이전 벨트에 로봇 있는데 현재 내구도 없다면 continue;
    if (robots[i - 1] && durability[i] === 0) continue;
    // 이전 벨트에 로봇이 있는데 현재 내구도 있다면 이동;
    if (!robots[i] && durability[i] > 0) {
      robots[i] = robots[i - 1];
      robots[i - 1] = 0;
      durability[i]--;
    }
  }
}

function check0() {
  return durability.reduce((acc, cur) => (cur === 0 ? acc + 1 : acc), 0);
}

function pushRobot() {
  if (durability[0] > 0) {
    robots[0] = 1;
    durability[0]--;
  }
}

const [N, K] = input[0].split(' ').map(Number);
const durability = input[1].split(' ').map(Number);

// 로봇의 위치를 나타내는 배열
const robots = [...Array(2 * N)].map(() => 0);

let count = 0;
while (check0() < K) {
  count++;
  // 벨트를 이동시키고, 내리는 칸에 로봇 있으면 비워줌
  moveBelt();
  if (robots[N - 1]) robots[N - 1] = 0;
  // 로봇을 이동시키고, 내리는 칸에 로봇 있으면 비워줌
  moveRobot();
  if (robots[N - 1]) robots[N - 1] = 0;
  pushRobot();
}

console.log(count);

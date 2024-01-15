const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 뿌요를 놓고 난 후 4개 이상 연결되어 있으면 같은 뿌요들이 한번에 사라진다 => 1연쇄
// 뿌요가 없어지고 그 위에 뿌요가 있다면 차례대로 아래로 떨어진다.
// 아래로 떨어지고 다시 검사하고 4개 이상 연결되면 같은 뿌욛르이 한번에 사라진다.

// 반복문
// 찾아서 터뜨리고,
// 위에서 아래로 떨어지고,
// 카운트 늘리고,

const map = [];
for (let i = 0; i < input.length; i++) {
  map.push(input[i].split(''));
}

const row = 12;
const col = 6;
let flag = true;
let count = 0;
let del = 0;
while (flag) {
  const visited = [...map].map(v => v.map(v => false));
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (map[i][j] !== '.') {
        bfsAndRemove(i, j, visited);
        // console.log('삭제하고 map', map);
      }
    }
  }
  fall();
  // console.log('정리하고 map', map);
  if (del === 0) break;
  count++;
  del = 0;
}
console.log(count);

// 인접한 같은 문자가 4개 이상이면 좌표의 배열을 반환
// 아니라면 빈 배열 반환
function bfsAndRemove(x, y, visited) {
  const q = [[x, y]];
  visited[x][y] = true;
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  const remove = [[x, y]];
  while (q.length) {
    const [r, c] = q.shift();
    for (let i = 0; i < 4; i++) {
      const nr = r + dr[i];
      const nc = c + dc[i];
      if (nr >= 0 && nr < row && nc >= 0 && nc < col) {
        if (!visited[nr][nc] && map[nr][nc] === map[x][y]) {
          q.push([nr, nc]);
          visited[nr][nc] = true;
          remove.push([nr, nc]);
        }
      }
    }
  }
  if (remove.length > 3) {
    for (let i = 0; i < remove.length; i++) {
      del++;
      const rowNum = remove[i][0];
      const colNum = remove[i][1];
      map[rowNum][colNum] = '.';
    }
  }
}

function fall() {
  for (let i = 0; i < col; i++) {
    const stack = [];
    for (let j = 0; j < row; j++) {
      if (map[j][i] !== '.') {
        stack.push(map[j][i]);
        map[j][i] = '.';
      }
    }
    for (let k = row - 1; k >= 0; k--) {
      if (!stack.length) break;
      map[k][i] = stack.pop();
    }
  }
}

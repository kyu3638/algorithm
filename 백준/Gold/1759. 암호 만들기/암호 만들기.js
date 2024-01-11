const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// L : 암호의 자리 수, C : 주어진 letter의 수
const [L, C] = input[0].split(' ').map(Number);

const letters = input[1].split(' ').sort();

// L 자리 부분집합을 만드는데, 모음 1개, 자음 2개 이상 들어갔는지를 체크
// 모음 vowel
// 자음 consonant

function backtrack(arr, num, path, vowel, consonant) {
  if (path.length === num) {
    if (vowel >= 1 && consonant >= 2) {
      answer.push([...path].join(''));
      return;
    } else return;
  }

  for (let i = 0; i < arr.length; i++) {
    const arrNextI = [...arr.slice(i + 1)];
    let vowel2 = vowel;
    let consonant2 = consonant;
    if (arr[i] === 'a' || arr[i] === 'i' || arr[i] === 'e' || arr[i] === 'o' || arr[i] === 'u') vowel2++;
    else consonant2++;
    backtrack(arrNextI, num, [...path, arr[i]], vowel2, consonant2);
  }
}

const answer = [];
backtrack(letters, L, [], 0, 0);
console.log(answer.join('\n'));

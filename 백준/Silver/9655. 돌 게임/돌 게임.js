const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs').readFileSync(filePath).toString();

const n = Number(input);

if (n % 2 === 1) console.log('SK');
else console.log('CY');

function solution(arr) {
    return arr.map(num => isBiggerThanFifty(num) && !isOdd(num) ? num / 2 : !isBiggerThanFifty(num) && isOdd(num) ? num * 2 : num);
}

const isBiggerThanFifty = (num) => !!(num >= 50);

const isOdd = (num) => !!(num % 2);
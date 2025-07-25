function solution(s) {
    if(isOdd(s.length)){
        return s[Math.floor(s.length / 2)];
    } else {
        return s[s.length / 2 - 1] + s[s.length / 2];
    }
}

const isOdd = (num) => num % 2;
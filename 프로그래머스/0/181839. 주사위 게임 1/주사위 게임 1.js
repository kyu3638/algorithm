function solution(a, b) {
    switch(numberOfOdds(a,b)){
        case 0:
            return Math.abs(a-b);
        case 1:
            return 2 * (a + b);
        case 2:
            return a*a + b*b;
    }
}

const numberOfOdds = (a,b) => {
    return isOdd(a) + isOdd(b);
}

const isOdd = (num) => num % 2;
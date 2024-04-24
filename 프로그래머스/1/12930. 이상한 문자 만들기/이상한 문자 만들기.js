function isOdd(n){
    return n % 2 ? true : false;
}

function solution(s) {
    let index = 0;
    return s.split('').map(letter => {
        if(letter === ' ') {
            index = 0;
            return ' '
        }
        if(!isOdd(index)) {
            index++;
            return letter.toUpperCase();
        } else {
            index++;
            return letter.toLowerCase();
        }
    }).join('')
}
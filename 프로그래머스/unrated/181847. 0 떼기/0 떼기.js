function solution(n_str) {
    var answer = [];
    n_str = n_str.split('').map(v=>Number(v))
    for(let i = 0; i < n_str.length; i++){
        if(n_str[i] === 0) continue;
        if(n_str[i] !== 0) {
            answer = n_str.slice(i,n_str.length);
            break;
        }
    }
    return String(answer.join(''))
}
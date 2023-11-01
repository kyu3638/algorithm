function solution(A, B) {
    var answer = 0;
    A = A.split('');
    B = B.split('');
    for(let i = 0; i < A.length; i++){
        if(A.join('') === B.join('')){
            break;
        }
        answer++;
        const a = A.pop();
        A.unshift(a);
        if(i === A.length - 1) answer = -1;
    }
    return answer;
}
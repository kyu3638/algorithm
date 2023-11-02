function solution(t, p) {
    var answer = 0;
    
    for(let i = 0; i < t.length - (p.length - 1);i++){
        const num = t.slice(i, i + p.length);
        console.log(Number(num));
        if(Number(num) <= Number(p)){
            answer++;
        }
    }
    
    return answer;
}
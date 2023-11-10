function solution(r1, r2) {
    var answer = 0;
    
    for(let x = 1; x <= r2; x++){
        if(x >= r1) {
            const r2Y = Math.floor(Math.sqrt(r2*r2 - x*x));
            answer += r2Y + 1;
        } else {
            const r2Y = Math.floor(Math.sqrt(r2*r2 - x*x));
            const r1Y = Math.ceil(Math.sqrt(r1*r1 - x*x));
            answer += r2Y - r1Y + 1;
        }
    }
    console.log(answer);
    return answer * 4;
}
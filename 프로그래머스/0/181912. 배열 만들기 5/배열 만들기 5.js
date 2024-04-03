function solution(intStrs, k, s, l) {
    const answer = [];
    
    intStrs.forEach(num =>{
        const temp = num.slice(s, s+l);
        if(Number(temp) > k){
            answer.push(Number(temp));
        }
    })
    
    return answer;
}
function solution(n) {
    var answer = [];
    for(let i = 2; i <= n; i++){
        if(n % i === 0){
            n = n / i;
            answer.push(i);
        }
        let possibleToDivide = true;
        while(possibleToDivide){
            if(n % i === 0) n = n / i;
            if(n % i !== 0) possibleToDivide = false;
        }
    }
    return answer;
}
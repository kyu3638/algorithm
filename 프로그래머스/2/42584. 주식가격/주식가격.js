function solution(prices) {
    var answer = [];
    for(let i = 0; i < prices.length; i++){
        let seconds = 0;
        for(let j = i + 1; j < prices.length; j++){
            seconds++;
            if(prices[i] > prices[j]) break;
        }
        answer.push(seconds);
    }
    return answer;
}
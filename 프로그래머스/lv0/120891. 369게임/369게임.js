function solution(order) {
    var answer = 0;
    order = order.toString();
    for (const i of order){
        if(i === '0') continue;
        if(i % 3 === 0){
            answer++;
        }
    }
    
    return answer;
}
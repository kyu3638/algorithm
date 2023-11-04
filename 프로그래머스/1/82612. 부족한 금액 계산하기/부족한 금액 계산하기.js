function solution(price, money, count) {
    var answer = -1;
    let total = 0;
    for(let i = 0; i < count; i++){
        total += (i + 1) * price;
    }
    answer = total <= money ? 0 : total - money;
    return answer;
}
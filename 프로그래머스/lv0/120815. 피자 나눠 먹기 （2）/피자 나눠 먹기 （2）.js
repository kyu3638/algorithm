function solution(n) {
    var pizza = 1;
    let bool = false;
    while(!bool){
        const answer = (n * pizza) / 6;
        if(Number.isInteger(answer)){
            bool = true;
            return answer;
        }
        pizza++;
    }
}
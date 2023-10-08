function solution(balls, share) {
    var answer = 0;
    // 분모
    let a = balls;
    let i = 0;
    while(i < share - 1){
        balls--;
        a = a * balls;
        i++;
    }
    console.log(a);
    // 분자
    let b = share;
    let j = 0;
    while(share > 1){
        share--;
        b = b * share;
        j++;
    }
    console.log(b);
    answer = a / b;
    return answer;
}
function solution(num, total) {
    const answer = [];
    if (num % 2 != 0) {
        let a = parseInt(total / num);
        for (let i = a - parseInt(num/2); i <= a + parseInt(num/2); i++) {
            answer.push(i);
        }   
    } else {
        let a = parseInt(total / num);
        for (let i = a - parseInt(num/2) + 1; i <= a + parseInt(num/2); i++) {
            answer.push(i);
        }
    }
    return answer;
}
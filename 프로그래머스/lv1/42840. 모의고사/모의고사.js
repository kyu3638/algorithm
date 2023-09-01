function solution(answers) {
    var answer = [];
    // 각 수포자의 점수를 담을 배열 초기화
    let score = [0, 0, 0];
    // 5, 8, 10
    const answerFirst = [1, 2, 3, 4, 5];
    const answerSecond = [2, 1, 2, 3, 2, 4, 2, 5];
    const answerThird = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    
    for(let i = 0; i < answers.length; i++){
        const remainderFive = i % 5;
        const remainderEight = i % 8;
        const remainderTen = i % 10;
        if(answers[i] === answerFirst[remainderFive]) {
            score[0]++;
        }
        if(answers[i] === answerSecond[remainderEight]) {
            score[1]++;
        }
        if(answers[i] === answerThird[remainderTen]) {
            score[2]++;
        }
    }
    
    const maxNum = Math.max(...score);
    // console.log(maxNum);
    if(maxNum === score[0]) answer.push(1);
    if(maxNum === score[1]) answer.push(2);
    if(maxNum === score[2]) answer.push(3);
    
    return answer;
}
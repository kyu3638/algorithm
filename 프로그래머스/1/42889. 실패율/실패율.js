function solution(N, stages) {
    var answer = [[0, 0]];
    // 스테이지의 개수 N
    // 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages
    
    // 반복문으로 순회하며 i가 몇개인지 찾고 i이상의 개수를 찾음
    for(let i = 1; i <= N; i++){
        let userWhoDoesntClear = 0;
        let usersWhoArriveStage = 0;
        for(let j = 0; j < stages.length; j++){
            if(stages[j] === i) userWhoDoesntClear++;
            if(stages[j] >= i) usersWhoArriveStage++;
        }
        answer.push([i, userWhoDoesntClear/usersWhoArriveStage])
    }
    answer.shift();
    answer.sort((a,b)=>b[1]-a[1]);
    answer = answer.map(v=>v[0])
    return answer;
}
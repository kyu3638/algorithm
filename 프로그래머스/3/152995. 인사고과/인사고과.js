// 해당 점수가 다른 모든 점수들보다 크거나 같으면 true, 아니면 false
function check(arr, scores){
    for(let i = 0; i < scores.length; i++){
        if(arr[0] < scores[i][0] && arr[1] < scores[i][1]) return false;
    }
    return true;
}

function solution(scores) {
    let answer = 1;
    
    // 합계 점수가 원호보다 높은 사람이 인센티브 조건 만족하면 원호 등수++
    for(let i = 1; i < scores.length; i++){
        if(scores[i][0] + scores[i][1] > scores[0][0] + scores[0][1]){
            if(check(scores[i], scores)) answer++
        }
    }
    
    // 원호가 인센티브 받지 못하는 경우 -1;
    for(let i = 1; i < scores.length; i++){
        if(scores[i][0] > scores[0][0] && scores[i][1] > scores[0][1]) answer = -1;
    }
    
    return answer;
}
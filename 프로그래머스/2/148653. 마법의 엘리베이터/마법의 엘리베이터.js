function solution(storey) {
    var answer = 0;
    // 층수를 배열의 형태로 바꿈
    storey = String(storey).split('').map(v=>Number(v));
    // 가장 높은 자리에서 한자리 높아질 수 있으므로 첫번째 자리에 0을 임의로 만들어 줌
    storey.unshift(0);
    // 각 자리수의 층에서 몇번 이동이 필요한지
    for(let i = storey.length - 1; i >= 0; i--){
        // 밑에 자리에서 하나가 올림이 되어 혹시 10이 된 경우에
        if(storey[i] === 10){
            // 우선 그 자리수에서는 10을 빼주고
            storey[i] -= 10;
            // 그 윗자리수에 +1 해줌
            storey[i-1] += 1;
            // 이번 자리수에서는 계산할 것 없으므로 continue;
            continue;
        }
        // 자리수가 5보다 큰 경우와 작은 경우, 5인 경우 구분 구분
        if(storey[i] > 5) {
            answer += 10 - storey[i];
            storey[i-1] += 1;
        } else if(storey[i] < 5){
            answer += storey[i];
        } 
        // 현재 자리수가 5인 경우 윗자리수에 올리는게 이득, 손해일 수 있음
        else {
            if(storey[i-1] >= 5){
                answer += 10 - storey[i];
                storey[i-1] += 1;
            } else {
                answer += storey[i];
            }
        }
    }
    return answer;
}
function solution(n,info){
    // 정답 후보를 담을 배열
    let answer = Array(11).fill(0);
    let maxDiff = 0;
    
    function findMaxPoint(apeachScore, ryanScore, usedShots, point, arr){
        if(n < usedShots) return;
        if(point > 10){
            let diff = ryanScore - apeachScore;
            if(maxDiff < diff){
                arr[10] = n - usedShots;
                maxDiff = diff;
                answer = arr;
            }
            return;
        }
        
        if(n > usedShots){
            let current = [...arr];
            current[10 - point] = info[10 - point] + 1;
            findMaxPoint(apeachScore, ryanScore + point, usedShots + info[10 - point] + 1, point + 1, current);
        }
        
        if(info[10 - point] > 0){
            findMaxPoint(apeachScore + point, ryanScore, usedShots, point + 1, arr);
        } else {
            findMaxPoint(apeachScore, ryanScore, usedShots, point + 1, arr)
        }
    }
    
    findMaxPoint(0,0,0,0,answer);
    return maxDiff <= 0 ? [-1]: answer;
}
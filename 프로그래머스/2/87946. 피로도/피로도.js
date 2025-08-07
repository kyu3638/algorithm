function solution(k, dungeons) {
    // 탐험을 시작하기 위한 최소 피로도
    // 탐험을 마쳤을 때 소모 피로도 가 소모됨
    
    // 유저의 현재 피로도 k
    // [minFatigue, consumeFatigue][]
    let maxCount = 0;
    
    const dfs = (currentCount, visitedIndices, hp) => {
        maxCount = Math.max(maxCount, currentCount);
        
        for(let i = 0; i < dungeons.length; i++) {
            if(!visitedIndices.includes(i)) {
                if(hp >= dungeons[i][0]) {
                    dfs(currentCount+1, [...visitedIndices, i], hp - dungeons[i][1]);
                }
            }
        }
    }
    
    for(let i = 0; i < dungeons.length; i++) {
        if(k >= dungeons[i][0]) {
            dfs(1, [i], k - dungeons[i][1]);
        }
    }
    
    return maxCount;
}
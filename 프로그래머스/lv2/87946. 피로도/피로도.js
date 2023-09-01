function solution(k, dungeons) {
    // 탐험 시작을 위한 '최소 필요 피로도' : 해당 던전을 탐험하기 위해 가지고 있어야 하는 최소한의 피로도
    // 던전 탐험을 마쳤을 때 소모되는 '소모 피로도' : 던전을 탐험한 후 소모되는 피로도
    
    // 유저의 현재 피로도 : k
    // 각 던전 별 최소 피로도, 소모 피로도 : dungeons - [x,y]
    // 유저가 탐험할 수 있는 최대 던전 수를 return 하는 함수 구현

    let answer = 0;
    let visited = Array.from({length:dungeons.length}, _ => 0);
    
    const dfs = (fatigue, depth) => {
        answer = Math.max(answer, depth);
        
        for(const i in dungeons){
            const [need,consume] = dungeons[i];
            if(!visited[i] && fatigue >= need){
                visited[i] = 1;
                dfs(fatigue - consume, depth +1);
                visited[i] = 0;
            }
        }
    }
    dfs(k,0);
    
    return answer;
}
function solution(picks, minerals) {
    let answer = 0;
    
    // 가진 곡괭이로 최대 캘 수 있는 광물의 개수만큼의 원소만 남김
    minerals = minerals.slice(0, picks.reduce((acc,cur)=> acc + 5 * cur, 0))
    
    // 광물을 5개씩 잘라 보관할 2차원 배열
    const mineralDivideIntoFive = [];
    for(let i = 0; i < minerals.length; i+=5) {
        mineralDivideIntoFive.push(minerals.slice(i,i+5));
    }
    
    // 다이아가 많은 순서, 같을 경우 철이 많은 순서로 정렬
    mineralDivideIntoFive.sort((a,b)=>{
        const aDiaCount = a.filter(el => el === 'diamond').length;
        const bDiaCount = b.filter(el => el === 'diamond').length;
        if(aDiaCount === bDiaCount){
            const aIronCount = a.filter(el => el === 'iron').length;
            const bIronCount = b.filter(el => el === 'iron').length;
            return bIronCount - aIronCount;
        }
        return bDiaCount - aDiaCount;
    })    

    // 2차원으로 저장된 광물들을 5개씩 꺼내서 피로도를 계산
    for(let i = 0; i < mineralDivideIntoFive.length; i++){
        if(picks[0] > 0){ 
            answer += mineralDivideIntoFive[i].length;
            picks[0]--;
        } else if(picks[1] > 0){
            for(let j = 0; j < mineralDivideIntoFive[i].length; j++){
                switch(mineralDivideIntoFive[i][j]){
                    case 'diamond':
                        answer += 5;
                        break;
                    case 'iron':
                        answer += 1;
                        break;
                    case 'stone':
                        answer += 1;
                        break;
                }
            }
            picks[1]--;
        } else if(picks[2] > 0){
           for(let j = 0; j < mineralDivideIntoFive[i].length; j++){
                switch(mineralDivideIntoFive[i][j]){
                    case 'diamond':
                        answer += 25;
                        break;
                    case 'iron':
                        answer += 5;
                        break;
                    case 'stone':
                        answer += 1;
                        break;
                }
            }
            picks[2]--;
        }
    }
    
    return answer;
}
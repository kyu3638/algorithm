function solution(places) {
    var answer = [];
    
    for(let i = 0; i < places.length; i++){
        const map = places[i].map(arr => arr.split(''));
        
        // 사람이 있는지 체크하고, 거리두기 중인지 체크
        // 바로 옆인데 사람 있으면 종료
        const distance1 = [[-1,0],[1,0],[0,-1],[0,1]];
        // 같은 줄 두칸 떨어져 있는데 파티션 없으면 종료
        const distance2SameLine = [[-2,0],[2,0],[0,-2],[0,2]];
        // 대각선에 있는데 파티션 두개 없으면 종료
        const distance2DiffLine = [[-1,-1],[-1,1],[1,-1],[1,-1]]
        
        let flag = true;
        function check(r,c){
            for(const place of distance1){
                const nr = r + place[0];
                const nc = c + place[1];
                if(nr >= 0 && nr < 5 && nc >= 0 && nc < 5){
                    if(map[nr][nc] === 'P'){
                        flag = false;
                        return;
                    }
                }
            }
            
            for(const place of distance2SameLine){
                const nr = r + place[0];
                const nc = c + place[1];
                if(nr >= 0 && nr < 5 && nc >= 0 && nc < 5){
                    if(map[nr][nc] === 'P'){
                        if(map[(r+nr)/2][(c+nc)/2]==="O"){
                            flag = false;
                            return;
                        }
                    }
                }
            }
            
            for(const place of distance2DiffLine){
                const nr = r + place[0];
                const nc = c + place[1];
                const bigR = Math.max(r,nr);
                const smallR = Math.min(r,nr);
                const bigC = Math.max(c,nc);
                const smallC = Math.min(c,nc)
                if(distance2DiffLine.indexOf(place) <= 1){
                    if(nr >= 0 && nr < 5 && nc >= 0 && nc < 5){
                        if(map[nr][nc] === 'P'){
                            if(
                                map[bigR][smallC]==="O" ||
                                map[smallR][bigC]==="O"
                            ){
                                flag = false;
                                return;
                            }
                        }
                    }
                } else {
                    if(nr >= 0 && nr < 5 && nc >= 0 && nc < 5){
                        if(map[nr][nc] === 'P'){
                            if(
                                map[bigR][bigC]==="O" ||
                                map[smallR][smallC]==="O"
                            ){
                                flag = false;
                                return;
                            }
                        }
                    }
                }
            }
        }
        
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 5; j++){
                if(map[i][j] === 'P') check(i,j);
                if(!flag) break;
            }
            if(!flag) break;
        }
        if(flag) answer.push(1);
        else answer.push(0);
    }
    
    return answer;
}
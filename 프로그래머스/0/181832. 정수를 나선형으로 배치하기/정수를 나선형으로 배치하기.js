function solution(n) {
    const map = Array.from({length:n}, () => Array.from({length:n}, ()=>0));
    
    let currentX = 0;
    let currentY = 0;
    
    while(true) {
        if(currentX === 0 && currentY === 0 && map[currentX][currentY] === 0 ) map[currentX][currentY] = 1;
        while(true) {
            if(currentY + 1 < n && map[currentX][currentY + 1] === 0){
                map[currentX][currentY + 1] = map[currentX][currentY] + 1;
                currentY += 1;
            } else {
                break;
            }
        }
        
        while(true) {
            if(currentX + 1 < n && map[currentX + 1][currentY] === 0) {
                map[currentX + 1][currentY] = map[currentX][currentY] + 1;
                currentX += 1;
            } else {
                break;
            }
        }
        
        while(true) {
            if(currentY - 1 >= 0 && map[currentX][currentY - 1] === 0) {
                map[currentX][currentY - 1] = map[currentX][currentY] + 1;
                currentY -= 1;
            } else {
                break;
            }
        }
        
        while(true) {
            if(currentX - 1 >= 0 && map[currentX - 1][currentY] === 0) {
                map[currentX - 1][currentY] = map[currentX][currentY] + 1;
                currentX -= 1;
            } else {
                break;
            }
        }
        
        if(map[currentX][currentY + 1] === 0) continue;
        else break;
    }
    
    return map;
}
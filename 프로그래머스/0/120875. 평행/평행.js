function solution(dots) {
    // 2개씩 짝을지어 기울기를 측정하고 같은 값이 나오는 경우가 있으면 return 1
    // 겹치는 경우에도 1을 return 하면 되므로 겹치는 경우에 대한 예외처리는 필요하지 않음
    // [0-1],[2-3] | [0-2],[1-3] | [0-3],[1-2] 3가지 케이스가 있을 것
    
    if(calc(dots[0],dots[1]) === calc(dots[2],dots[3]) || calc(dots[0],dots[2]) === calc(dots[1],dots[3]) || calc(dots[0],dots[3]) === calc(dots[1],dots[2])) return 1;
    else return 0;
}

const calc = ([x1,y1],[x2,y2]) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    
    const angle = dy / dx;
    
    return angle;
}
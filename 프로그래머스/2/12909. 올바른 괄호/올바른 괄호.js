function solution(s){
    let open = 0;
    let close = 0;
    
    for(const p of s) {
        if (p === "(") {
            open++;
        } else {
            close++;
            if(close > open) return false;
        }
    }

    if(open !== close) return false;
    
    return true;
}
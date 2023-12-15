function solution(n, left, right) {
    const arr = [];
    
    while(left <= right){
        arr.push(Math.max( Math.floor(left / n), left % n ) + 1);
        left++;
    }
    
    return arr;
}
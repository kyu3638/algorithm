function solution(start_num, end_num) {
    const arr = [];
    
    for(let i = 0; i <= start_num - end_num; i++){
        arr.push(start_num - i);
    }
    
    return arr;
}
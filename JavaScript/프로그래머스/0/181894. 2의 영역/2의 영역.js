function solution(arr) {
    const first = arr.indexOf(2);
    if(first === -1) return [-1]
    
    const last = arr.lastIndexOf(2);

    
    return arr.slice(first, last + 1);
}
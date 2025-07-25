function solution(arr) {
    if(arr.length === 1) return [-1];
    
    let min;
    
    for(let i = 0; i < arr.length; i++) {
        if(!min || arr[i] < min) min = arr[i];
    }
    
    const minIndex = arr.indexOf(min);
    
    return [...arr.slice(0, minIndex), ...arr.slice(minIndex + 1)];
}
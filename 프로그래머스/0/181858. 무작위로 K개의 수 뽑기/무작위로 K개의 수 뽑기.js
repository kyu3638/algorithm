function solution(arr, k) {
    const temp = [...new Set(arr)].slice(0,k);
    
    return [...temp, ...[...new Array(k-temp.length)].map(()=>(-1))];
}
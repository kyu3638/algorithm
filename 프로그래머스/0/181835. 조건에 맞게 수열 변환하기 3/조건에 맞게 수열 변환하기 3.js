function solution(arr, k) {
    const isOdd = k % 2;
    if(isOdd){
        return arr.map(v=>v*k)
    } else {
        return arr.map(v=>v+k)
    }
}
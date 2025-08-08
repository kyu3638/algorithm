function solution(n, times) {
    // n 명이 입국심사 대기
    // 심사관마다 걸리는 시간 다름
    
    // 처음에는 다 비어있고,
    // 빨리 끝나는 심사대로 사람들이 들어감
    
    // 모든 사람이 심사받는데 걸리는 시간의 최솟값
    let left = 1;
    let right = times.sort((a,b)=>b-a)[0] * n;
    let mid = Math.floor((left + right) / 2);

    
    while(left < right) {
        mid = Math.floor((left + right) / 2);
        // mid의 시간일 때 처리가 가능한지를 확인
        let count = 0;
        times.forEach((time) => {
            count += Math.floor(mid / time);
        })
        
        if(count >= n) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}
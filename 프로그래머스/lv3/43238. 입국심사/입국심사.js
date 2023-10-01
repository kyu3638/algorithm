function solution(n, times){
    // 이분탐색을 위한 정렬
    times.sort((a,b)=>a-b);
    // pl, pr, mid 값 초기화
    let pl = 0;
    let pr = times[times.length - 1] * n;
    let mid = Math.floor((pl+pr)/2);
    
    // pr이 pl보다 큰 경우 계속 반복
    while(pl <= pr){
        // 현재 시간의 범위에서 몇 명이 검사를 받을 수 있는지 계산
        const count = times.reduce((result, cur) => result + Math.floor(mid/cur),0);
        
        // n명에 해당하는 인원이 검사받지 않는경우
        if(count >= n){
            pr = mid - 1; // n명보다 더 많은 사람을 검사하는 경우
        } else {
            pl = mid + 1; // n명보다 더 적은 사람을 검사하는 경우
        }
        
        // 정해진 pl 또는 pr값을 기준으로 다음 mid 값 결정
        mid = Math.floor((pl + pr) / 2);
    }
    
    return pl;
}
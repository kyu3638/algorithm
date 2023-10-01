function solution(n, times) {
    var answer = 0;
    // 이분탐색이므로 정렬
    times.sort((a,b) =>{a-b});
    // 최소 1분에 모두 심사를 마칠 수 있음
    // 최대 times의 max값 * n명에 심사를 마칠 수 있음
    let pl = 1;
    let pr = times[times.length - 1] * n;
    let mid = Math.floor((pl + pr) / 2);
    console.log(pl,pr,mid);
    
    // 해당 minutes 동안에 심사관이 심사할 수 있는 인원 = Math.floor(minutes/times[i])
    while(pl <= pr){
        let count = 0;
        for(let i = 0; i < times.length; i++){
            count += Math.floor(mid/times[i]);
        }
        if(count >= n){
            pr = mid - 1;
        } else {
            pl = mid + 1;
        }
        console.log(`pl : ${pl}, pr : ${pr}, mid : ${mid}`)
        mid = Math.floor((pl + pr) / 2);

    }
    return pl;
}
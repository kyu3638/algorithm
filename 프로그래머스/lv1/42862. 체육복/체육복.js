function solution(n, lost, reserve) {
    var answer = 0;
    lost = lost.sort((a,b)=>a-b);
    reserve = reserve.sort((a,b)=>a-b);
    
    for(let i = 1; i <= n; i++){
        // 만약 i가 lost 배열에 없다면(즉, 옷이 있다면)
        if(lost.indexOf(i) < 0){
            answer++;
        }
        // 만약 i가 lost 배열에 있다면(즉, 옷이 없다면)
        else {
            // 직전 사람이 여분의 옷이 있는 경우
            if(reserve.indexOf(i-1) >= 0 && lost.indexOf(i-1) < 0){
                answer++;
                // 여분의 옷을 썼으니 reserve 배열에서 제거
                reserve = reserve.filter(el => el !== (i-1));
            }
            // 직후 사람이 여분의 옷이 있는 경우
            else if(reserve.indexOf(i+1) >= 0 && lost.indexOf(i+1) < 0){
                answer++;
                reserve = reserve.filter(el => el !== (i+1));
            }
            // 자기가 도난 당했는데, 여분의 옷이 있다면?
            else if(reserve.indexOf(i) >= 0 && lost.indexOf(i) >= 0){
                answer++;
                reserve = reserve.filter(el => el !== i);
            }
        }
    }
    return answer;
}
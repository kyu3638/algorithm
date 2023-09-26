function solution(progresses, speeds) {
    var answer = [];
    
    // 100이 넘는지 확인할 원소의 번호
    let checkedFun = 0;
    
    // 같은 날 몇개의 기능이 출시될지 세는 변수
    let count = 0;
    
    // n 번째 원소가 100보다 크다면, n+1번째 원소도 체크하는 함수
    function checkIfBiggerThanHundred(n){
        if(progresses[n] >= 100){
            count += 1;
        } else {
            return;
        }
        checkIfBiggerThanHundred(n+1)
    }
    
    // 모든 기능에 대해서 speeds만큼 더해주고,
    // 첫 번째 원소(현재 체크해야하는 원소)에 대해
    // 100이 넘는지 확인
    while(checkedFun < progresses.length){
        for(let i = 0; i < progresses.length;i++){
            progresses[i] += speeds[i];
        }
        checkIfBiggerThanHundred(checkedFun);
        if(count > 0) {
            answer.push(count);
            checkedFun += count;
            count = 0;
        }
    }    
    
    return answer;
}
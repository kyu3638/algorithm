function solution(my_string) {
    var answer = 0;
    let temp = '';
    
    function isNumber(i){
        if(Number.isInteger(Number(my_string[i]))){
            temp += my_string[i];
            // my_string[i]가 마지막 원소인 경우
            if(i === my_string.length - 1){
                answer += Number(temp);
            }
        } else {
            // 빈문자열이 아니라면 => 이전 탐색까지 숫자가 들어와 있다면
            if(temp !== ''){
                // temp를 answer에 더하고 초기화
                answer += Number(temp);
                temp =''
            }
        }
    }
    
    for(let i = 0; i < my_string.length; i++){
        isNumber(i);
    }
    
    return answer;
}
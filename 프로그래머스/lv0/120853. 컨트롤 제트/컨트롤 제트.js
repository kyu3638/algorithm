function solution(s) {
    var answer = 0;
    s = s.split(' ')
    console.log(s)
    // Z를 만나면 Z의 index - 1 에 있는 숫자를 빼는 함수 
    function minusBeforeZ(i){
        answer -= Number(s[i-1]);
    }
    
    for(let i = 0; i < s.length; i++){
        if(s[i] === 'Z'){
            minusBeforeZ(i);
        } else {
            answer += Number(s[i]);
        }
    }
    
    return answer;
}
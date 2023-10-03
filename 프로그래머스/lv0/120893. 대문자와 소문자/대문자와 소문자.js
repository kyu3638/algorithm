

function solution(my_string) {
    var answer = '';
    
    function UpperToLowerLowerToUpper(str){
    // 대문자인 경우
    if(str === str.toUpperCase()){
        answer += str.toLowerCase();
    }
    // 소문자인 경우
    else if(str === str.toLowerCase()){
        answer += str.toUpperCase();
    }
}
    
    for(let i = 0; i < my_string.length; i++){
        UpperToLowerLowerToUpper(my_string[i]);
    }
    console.log(answer);
    return answer;
}
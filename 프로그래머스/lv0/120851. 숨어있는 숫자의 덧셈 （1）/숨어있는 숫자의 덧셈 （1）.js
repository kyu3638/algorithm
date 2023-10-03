function solution(my_string) {
    var answer = 0;
    for(let i = 0; i < my_string.length; i++){
        let isNum = Number.isInteger(Number(my_string[i]));
        if(isNum){
            answer += Number(my_string[i]);
        }
    }
    return answer;
}
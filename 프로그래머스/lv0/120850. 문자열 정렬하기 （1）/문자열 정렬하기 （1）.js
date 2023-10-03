function solution(my_string) {
    var answer = [];

    
    for(let i = 0; i < my_string.length; i++){
        if(Number.isInteger(Number(my_string[i]))){
            answer.push(Number(my_string[i]));
        }
    }
    return answer.sort((a,b)=>a-b);
}
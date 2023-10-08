function solution(my_string) {
    my_string = my_string.split(' ');
    let answer = Number(my_string[0]);
    for(let i = 1; i < my_string.length / 2; i++){
        const index = 1 + 2 * (i - 1);
        if(my_string[index] === '+'){
            answer += Number(my_string[index + 1]);
        } else {
            answer -= Number(my_string[index + 1]);
        }
    }
    
    return answer;
}
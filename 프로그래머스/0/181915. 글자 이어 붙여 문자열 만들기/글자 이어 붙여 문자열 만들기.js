function solution(my_string, index_list) {
    var answer = '';
    
    index_list.forEach(num => {
        answer += my_string[num];
    })
    
    return answer;
}
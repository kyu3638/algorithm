function solution(my_str, n) {
    var answer = [];
    
    // String to Array
    my_str = my_str.split('')
    
    // 소수점 나오면 올림해서 반복
    const len = Math.ceil(my_str.length/n);
    
    for(let i = 0; i < len; i++){
        let temp =  my_str.splice(0,n);
        answer.push(temp.join(''));        
    }
     
    return answer;
}
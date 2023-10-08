function solution(numbers, k) {
    var answer = 0;
    
    const len = numbers.length;
    for(let i = 0; i < k; i++){
        let index = 2 * i;
        if(index < len){
            answer = numbers[index]
        } else if (index >= len){
            let repeat = Math.floor(index/len);
            answer = numbers[index - repeat * len]
        }
        
    }

    return answer;
}
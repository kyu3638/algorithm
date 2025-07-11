function solution(arr) {
    var answer = [];
    
    let i = 0;
    
    while(i < arr.length) {
        if(!answer.length) {
            answer.push(arr[i]);
            i++;
            continue;
        }
        
        if(answer[answer.length - 1] === arr[i]) {
            answer.pop();
            i++;
        } else if(answer[answer.length - 1] !== arr[i]) {
            answer.push(arr[i]);
            i++;
        }
    }
    
    return answer.length ? answer : [-1];
}
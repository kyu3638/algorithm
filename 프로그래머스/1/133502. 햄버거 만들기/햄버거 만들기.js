function solution(ingredient) {
    // 빵 – 야채 – 고기 - 빵 1 2 3 1
    var answer = 0;
    
    const stack = [];
    
    for(const i of ingredient){
        stack.push(i);
        if(stack.slice(-4).join('') === '1231'){
            stack.splice(-4);
            answer++;
        }
    }
    
    return answer;
}
function solution(order) {
    var answer = 0;
    const container = [...Array(order.length)].map((v,i)=>v = i + 1);
    const stack = [];
    let containerIndex = 0, orderIndex = 0;
    
    while(containerIndex <= order.length){
        
        if(containerIndex === container.length && orderIndex === order.length) break;
        
        // 컨테이너에 있는 택배의 순서가 맞는 경우
        if(container[containerIndex] === order[orderIndex]){
            containerIndex++;
            orderIndex++;
            answer++;
            continue;
        }
        // 보조 컨테이너의 택배 순서가 맞는 경우
        if(stack.length && stack[stack.length - 1] === order[orderIndex]){
            stack.pop();
            orderIndex++;
            answer++;
            continue;
        }
        
        // 컨테이너 -> 보조컨테이너
        stack.push(container[containerIndex]);
        containerIndex++;
    }
    
    return answer;
}
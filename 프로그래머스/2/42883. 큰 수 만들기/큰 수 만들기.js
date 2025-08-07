function solution(number, k) {
    const arr = [...number].map(Number);
    
    const stack = [];
    let removeCount = 0;
    
    for(let i = 0; i < arr.length; i++) {
        // 아무 값도 없을 때는 무조건 삽입
        if(stack.length === 0) {
            stack.push(arr[i]);
            continue;
        }
        
        if(removeCount < k) {
            while(stack[stack.length - 1] < arr[i] && removeCount < k) {
                if(stack[stack.length - 1] < arr[i]) {
                    stack.pop();
                    removeCount++;
                } else {
                    break;
                }
            }
            stack.push(arr[i]);
        } else if (removeCount === k) {
            stack.push(arr[i]);
        }
        
        if(i === arr.length - 1) {
            while(removeCount < k) {
                stack.pop();
                removeCount++;
            }
        }
    }
    
    return stack.map(String).join('');
}
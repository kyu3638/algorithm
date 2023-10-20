function solution(number, k) {
    const stack = [];
    // 모든 숫자 순회
    for(const num of number){
        // k가 아직 남아있고, 스택의 마지막 숫자가 비교 num보다 작으면 그건 제외
        // k가 0보다 크더라도 스택의 마지막 숫자가 num보다 큰 경우 k를 다 못쓰고 종료됨
        while(k > 0 && stack[stack.length-1] < num){
            stack.pop();
            k--;
        }
        // 그렇든 아니든 숫자는 집어넣는다
        stack.push(num);
    }

    // k를 다 못쓰고 종료되는 경우 splice로 잘라줌
    stack.splice(stack.length - k, k);
    
    return stack.join('')
}
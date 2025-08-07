function solution(numbers) {
    const numSet = new Set();
    
    // len 만큼의 숫자 조합을 만드는 함수
    const dfs = (currentNum, usedIndices, targetLen) => {
        // 종료 조건: currentNum.length가 targetLen일 때 numList에 삽입하고 종료
        if(currentNum.length === targetLen) {
            numSet.add(Number(currentNum));
            return;
        }
        
        for(let i = 0; i < numbers.length; i++) {
            if(!usedIndices.includes(i)){
                dfs(currentNum+numbers[i],[...usedIndices,i],targetLen);
            }
        }
    }
    
    for(let i = 1; i <= numbers.length; i++) {
        dfs('', [], i);
    }
    
    return [...numSet].reduce((acc,cur) => {
        if(isPrime(cur)) return acc + 1;
        return acc;
    }, 0);
}

const isPrime = (num) => {
    if(num < 2) return false;
    if(num === 2) return true;
    if(num % 2 === 0) return false;
    
    for(let i = 3; i <= Math.sqrt(num); i = i + 2) {
        if(num % i === 0) return false;
    }
    
    return true;
}
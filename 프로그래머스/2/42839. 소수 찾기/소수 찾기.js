function solution(numbers) {
    // 1. 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;
        
        for (let i = 3; i <= Math.sqrt(num); i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }
    
    // 2. 순열 생성 함수 (모든 길이)
    function getPermutations(arr) {
        const result = new Set(); // 중복 제거를 위해 Set 사용
        
        function permute(current, remaining) {
            if (current.length > 0) {
                const num = parseInt(current.join(''));
                if (num > 0) result.add(num); // 0으로 시작하는 수 제외
            }
            
            for (let i = 0; i < remaining.length; i++) {
                const next = [...current, remaining[i]];
                const nextRemaining = [...remaining.slice(0, i), ...remaining.slice(i + 1)];
                permute(next, nextRemaining);
            }
        }
        
        permute([], arr);
        return Array.from(result);
    }
    
    // 3. 모든 가능한 숫자 조합 생성
    const digits = numbers.split('');
    const allNumbers = getPermutations(digits);
    
    // 4. 소수인 것들만 카운트
    let count = 0;
    for (const num of allNumbers) {
        if (isPrime(num)) {
            count++;
        }
    }
    
    return count;
}
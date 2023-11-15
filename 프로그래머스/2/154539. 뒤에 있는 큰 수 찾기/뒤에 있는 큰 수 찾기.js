function solution(numbers) {
    const answer = [...Array(numbers.length)].map(v => -1);
    
    numbers.forEach((number, idx) => {
        // 각 number가 이전 number보다 크다면
        if(number > numbers[idx - 1]){
            let backTrackingIdx = 0;
            // number > numbers[idx - 1 - backTrackingIdx] 를 만족하는 동안만 반복하는 이유는
            // 만약 반대의 경우라면 이전 인덱스의 answer 원소들은 이미 numbers[idx - 1 backTrackingIdx]를
            // 부여받았을 것이기 때문
            while(number > numbers[idx - 1 - backTrackingIdx]){
                if(answer[idx - 1 - backTrackingIdx] === -1){
                    answer[idx - 1 - backTrackingIdx] = number;
                }
                backTrackingIdx++;
            }
        }
    })
    
    return answer;
}
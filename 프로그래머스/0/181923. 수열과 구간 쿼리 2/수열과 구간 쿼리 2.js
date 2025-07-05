function solution(arr, queries) {
    const answer = [];
    
    for (const [s, e, k] of queries) {
        let minValue = Infinity;
        let found = false;
        
        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < minValue) {
                minValue = arr[i];
                found = true;
            }
        }
        
        answer.push(found ? minValue : -1);
    }
    
    return answer;
}
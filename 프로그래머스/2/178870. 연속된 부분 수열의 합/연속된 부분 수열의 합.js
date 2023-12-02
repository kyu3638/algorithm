function solution(sequence, k) {
    const answer = [0,1000000];
    let start = 0;
    let end = 0;
    let sum = sequence[0];
    
    while(end < sequence.length){
        if(sum === k){
            if(end - start < answer[1] - answer[0]){
                answer[0] = start;
                answer[1] = end;
            }
            sum -= sequence[start]
            start++;
            end++;
            sum += sequence[end];
        } else if (sum < k){
            end++;
            sum += sequence[end];
        } else if (sum > k){
            sum -= sequence[start]
            start++;
        }
    }
    
    return answer;
}
function solution(numbers, target) {
    let answer = 0;
    const dfs = (length, sum) => {
        if(length === numbers.length){
            if(sum === target) answer++;
        } else {
            dfs(length + 1, sum + numbers[length]);
            dfs(length + 1, sum - numbers[length]);
        }
    }
    dfs(0,0);
    return answer;
}
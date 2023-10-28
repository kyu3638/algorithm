function solution(triangle) {
    var answer = 0;
    const dp = [...Array(triangle.length)].map((v, index)=>[...Array(index+1)].map(()=>0));
    // 각 층의 dp를 채우는 함수
    dp[0][0] = triangle[0][0];
    // triangle의 원소와 같은 위치까지 누적 최대값을 구하는 함수
    // 처음, 마지막 원소는 예외처리를 통해 구해주고
    // 나머지는 상위 두 수 중 큰 값에 구하는 위치 값을 구해준다.
    function dpFunc(n){
        if(n === 0) return;
        for(let i = 0; i < dp[n].length; i++){
            if(i === 0){
                dp[n][i] = dp[n-1][i] + triangle[n][i];
            }
            else if(i === dp[n].length - 1){
                dp[n][i] = dp[n-1][i-1] + triangle[n][i];
            }
            else {
                dp[n][i] = Math.max(dp[n-1][i-1], dp[n-1][i]) + triangle[n][i];
            }
        }
    }
    for(let i = 1; i < triangle.length; i++){
        dpFunc(i)
    }
    // 마지막 행의 최대값을 구해 리턴한다.
    const max = Math.max(...dp[triangle.length - 1])
    return max;
}

// dp[i][j] = Math.max(dp[i-1][j-1], dp[i-1][j]) + triangle[i][j]
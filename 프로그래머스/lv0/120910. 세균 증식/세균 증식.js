function solution(n, t) {
    var answer = 0;
    // 1시간 경과 n * 2
    // 2시간 경과 2n * 2
    // 3시간 경과 4n * 2
    answer = n * 2 ** t
    return answer;
}
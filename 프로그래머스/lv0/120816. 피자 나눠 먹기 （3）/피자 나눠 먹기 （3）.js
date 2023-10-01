function solution(slice, n) {
    var answer = 0;
    while(slice * answer < n){
        answer++;
    }
    return answer;
}
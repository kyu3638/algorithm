function solution(hp) {
    var answer = 0;
    answer += Math.floor(hp / 5);
    answer += Math.floor((hp % 5) / 3);
    answer += (hp % 5) % 3;
    return answer;
}
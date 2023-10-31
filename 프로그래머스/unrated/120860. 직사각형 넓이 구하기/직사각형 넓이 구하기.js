function solution(dots) {
    var answer = 0;
    const width = [];
    const height = [];
    for(let i = 0; i < 4; i++){
        width.push(dots[i][0]);
        height.push(dots[i][1]);
    }
    answer = (Math.max(...width) - Math.min(...width)) * (Math.max(...height) - Math.min(...height))
    return answer;
}
function solution(s) {
    var answer = [];
    // 각 문자별로 순회하면서,
    // 그 문자까지 해당문자와 일치하는 문자의 위치 찾고,
    // 없다면 -1
    // 있다면 가장 마지막에 나온 글자의 위치 저장
    s = s.split('');
    for(let i = 0; i < s.length; i++){
        let temp = -1;
        for(let j = 0; j <= i; j++){
            // i 번째 원소까지 0 ~ j까지 탐색하면서
            if(s[i] === s[j]){
                // i === j : 마지막 원소까지 탐색하면 temp 반환
                if(i === j) answer.push(temp);
                else temp = i - j;
            }
        }
    }
    return answer;
}
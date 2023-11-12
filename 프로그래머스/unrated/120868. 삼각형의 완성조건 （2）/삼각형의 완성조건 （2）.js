function solution(sides) {
    var answer = 0;
    sides.sort((a,b)=>b-a);
    // 삼각형을 만들기 위한 조건 : max < a + b
    
    // 현재 주어진 두 값 중 하나가 최대 값인 경우
    answer += sides[0] - (sides[0] - sides[1] + 1);
    // 찾아야하는 다른 한 값이 최대 값인 경우
    const anotherMax = sides[0] + sides[1];
    answer += anotherMax - sides[0];
    return answer;
}
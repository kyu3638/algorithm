function solution(numbers) {

    let answer = numbers.map((num) => num.toString()).sort((a,b) => (b+a)-(a+b)).join("");
    // sort 메서드의 인자로 오는 함수에서 a,b는 문자열이다.
    // ex) a=3, b=30이라면, b+a=303, a+b=330이다.
    // 이 두 문자열을 내림차순으로 정렬되어야 최대값이 만들어지도록 정렬을 할 수 있다.
    // 따라서 (b+a) - (a+b)를 리턴하여 정렬하면 된다.
    return answer[0]==="0" ? "0" : answer ;
}
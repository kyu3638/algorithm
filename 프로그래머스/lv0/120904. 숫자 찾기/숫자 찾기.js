function solution(num, k) {
    var answer = 0;
    num = num.toString().split('');
    answer = num.includes(String(k)) ? num.indexOf(String(k)) + 1 : -1;
    return answer;
}
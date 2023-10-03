function solution(cipher, code) {
    var answer = '';
    let i = 1;
    while(code * i - 1 < cipher.length){
        answer += cipher[code * i - 1]
        i++;
    }
    return answer;
}
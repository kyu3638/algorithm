function solution(my_string) {
    // 길이 52의 배열을 0으로 초기화
    const result = new Array(52).fill(0);
    
    // 문자열의 각 문자를 순회
    for (let char of my_string) {
        const charCode = char.charCodeAt(0);
        
        // 대문자 A-Z (ASCII 65-90)
        if (charCode >= 65 && charCode <= 90) {
            result[charCode - 65]++;
        }
        // 소문자 a-z (ASCII 97-122)
        else if (charCode >= 97 && charCode <= 122) {
            result[charCode - 97 + 26]++;
        }
    }
    
    return result;
}
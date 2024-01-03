/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    
    let answer = '';
  
    for(let i = 0; i < s.length; i++){
        let palindrome, left, right;

        let numOfSameLetter = 1;
        for(let k = i+1; k < s.length; k++){
            if(s[k] === s[i]) numOfSameLetter++;
            else break;
        }

        if(numOfSameLetter % 2 === 1){ // 같은 letter가 홀수개 연속
            i = i + Math.floor(numOfSameLetter / 2);
            palindrome = s[i]
            left = i, right = i;
        }
        else if(numOfSameLetter % 2 === 0){ // 같은 letter가 짝수개 연속
            i = i + (numOfSameLetter / 2 - 1);
            palindrome = s[i] + s[i+1];
            left = i, right = i+1;
        } 

        // palindrome으로부터 j만큼 떨어진 letter를 확인하고, 두 letter가 같으면 palindrome에 추가
        for(let j = 1; j <= Math.floor(s.length/2); j++){
            if(left-j>=0 && right+j<s.length){
                if(s[left-j] === s[right+j]){
                    palindrome = s[left-j] + palindrome + s[right+j];
                } else break;
            }
        }

        // 기준을 각 letter로 잡았을 때의 palindrome의 길이를 비교하교 answer 갱신 
        if(palindrome.length > answer.length) answer = palindrome;
    }

    return answer;

};
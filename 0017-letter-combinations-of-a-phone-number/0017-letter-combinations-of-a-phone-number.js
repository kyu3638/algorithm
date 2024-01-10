/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    const answer = [];
    const digitsObj = {2:['a','b','c'],3:['d','e','f'],4:['g','h','i'],5:['j','k','l'],6:['m','n','o'],7:['p','q','r','s'],8:['t','u','v'],9:['w','x','y','z']}

    function backtrack(digits,path){
        // 탐색할 번호가 없으면 종료
        if(!digits.length) return answer;

        // strInDigit 현재 누르는 번호에 어떤 문자열이 있는지 ex. 첫번째 누를 숫자가 2일 때 들어있는 문자는 a,b,c
        const index = path.length;
        const digit = digits[index];
        const strInDigit = digitsObj[digit];

        // 종료조건 : path의 길이가 digits의 길이와 같으면 종료
        // path : 누를 수 있는 경우의 수 조합 ex. 23 일 때 ad, be 등등..
        if(path.length === digits.length){
            answer.push(path.join(''));
            return;
        }

        // 첫번째 숫자부터 백트래킹
        // digits:23일 때, 2에서 a를 눌렀다면 [a]를 넘겨주고 3에서 [d]부터 순회, [b]를 넘겨주고 [d]부터 순회 등등..
        for(let i = 0; i < strInDigit.length; i++){
            backtrack(digits, [...path, strInDigit[i]])
        }
    }
    backtrack(digits,[])
    return answer;
};
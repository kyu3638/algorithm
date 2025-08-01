/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    const answer = [];
    let low = 0;
    let high = s.length;

    for(let char of s) {
        if(char === "I") {
            answer.push(low);
            low++;
        } else {
            answer.push(high);
            high--;
        }
    }

    answer.push(high);
    
    return answer;
};
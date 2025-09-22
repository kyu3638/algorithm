/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    const countObj = {};
    let maxFreq = 0;
    let answer = 0;

    for (let num of nums) {
        countObj[num] = (countObj[num] || 0) + 1;
        maxFreq = Math.max(maxFreq, countObj[num]);
    }

    Object.values(countObj).forEach(value => {
        if(value === maxFreq) answer += value;
    })

    return answer;
};
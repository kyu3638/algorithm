/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
    let answer = 0;

    const backtrack = (index, currentValue) => {
        if (index === nums.length - 1) {
            if (currentValue === target) {
                answer++;
                return;
            } else {
                return;
            }
        }

        backtrack(index + 1, currentValue + nums[index + 1]);
        backtrack(index + 1, currentValue - nums[index + 1]);
    }

    backtrack(-1, 0);

    return answer;

};
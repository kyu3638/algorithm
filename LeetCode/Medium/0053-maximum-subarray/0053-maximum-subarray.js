/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity;
    let current = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        current = Math.max(current + nums[i], nums[i]);
        if (current > max) {
            max = current;
        }
        console.log(current);
    }

    return max;
};
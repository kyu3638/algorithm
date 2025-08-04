/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // if(nums[0] >= nums.length - 1) return true;

    let maxReach = 0;

    for(let i = 0; i < nums.length; i++) {
        if(i > maxReach) return false;

        maxReach = Math.max(maxReach, i + nums[i]);

        if(maxReach >= nums.length - 1) return true;
    }

    return false;
};
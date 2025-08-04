/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumpCount = 0;
    let currentEnd = 0;
    let farthest = 0;

    for(let i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(i + nums[i], farthest);

        if(i === currentEnd) {
            jumpCount++;
            currentEnd = farthest;
        }
    }

    return jumpCount;
};
/**
 * @param {number[]} nums
 * @return {string}
 */
var optimalDivision = function(nums) {
    if(nums.length === 1) return String(nums[0]);

    const a = nums[0];
    const b = [...nums].slice(1);
    const b2 = b.length > 1 ? `(${b.join("/")})` : b;

    return [a,b2].join("/")
};
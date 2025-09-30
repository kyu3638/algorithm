/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function (nums) {
    if (nums.length === 1) return nums[0];

    let temp = [...nums];
    let next = [];

    for (let i = 0; i < temp.length - 1; i++) {
        const nextItem = (temp[i] + temp[i + 1]) % 10;
        next.push(nextItem);

        if (next.length === temp.length - 1) {
            temp = [...next];
            next = [];
            i = -1;
        }
    }

    return temp[0];
};
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const numObj = {};
    for(let i = 0; i < nums.length; i++){
        if(!numObj[nums[i]]) numObj[nums[i]] = [nums[i], 1];
        else numObj[nums[i]][1] += 1;
    }

    const numArr = Object.values(numObj)
    numArr.sort((a,b)=>b[1]-a[1])

    const answer = numArr.slice(0,k).map(v=>v[0])

    return answer;
};
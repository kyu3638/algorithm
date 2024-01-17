/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const numObj = {}
    nums.forEach(num=>{
        if(!numObj[num]) numObj[num]=0;
        numObj[num]++;
    })

    for(let i = 0; i < nums.length; i++){
        if(numObj[0]>0){
            nums[i] = 0;
            numObj[0]--;
            continue;
        }
        if(numObj[1]>0){
            nums[i] = 1
            numObj[1]--;
            continue;
        }
        if(numObj[2]>0){
            nums[i] = 2
            numObj[2]--;
            continue;
        }
    }
    console.log(nums)
};
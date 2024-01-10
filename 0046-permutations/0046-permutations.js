/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const answer = [];
    function backtrack(nums,path){
        if(nums.length === 0){
            answer.push(path);
            return;
        }

        for(let i = 0; i < nums.length; i++){
            backtrack([...nums.slice(0,i),...nums.slice(i+1)], [...path,nums[i]])
        }
    }
    backtrack(nums,[]);
    return answer;
};
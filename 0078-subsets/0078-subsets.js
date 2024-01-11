/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {

    function backtrack(arr,num,path){
        if(path.length === num) {
            answer.push([...path]);
            return
        }
        for(let i = 0; i < arr.length; i++){
            const arrNextI = [...arr.slice(i+1)]
            backtrack(arrNextI,num,[...path,arr[i]])
        }
    }

    const answer = [];
    // 부분집합의 원소의 개수는 0~nums.length까지 될 수 있으므로 i는 0부터 nums.length까지 backtrack함수 실행
    for(let i = 0; i <= nums.length; i++){
        backtrack(nums, i,[])
    }

    return answer;
};
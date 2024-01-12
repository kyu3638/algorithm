/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    const nums = [];

    function dfs(node){
        if(!node) return;
        console.log(node.val)
        if(node.val >= low && node.val <= high) nums.push(node.val);

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    
    return nums.reduce((acc,cur)=>acc+cur,0)
};
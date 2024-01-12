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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    // 현재 루트가 없으면 null
    if(!root) return null;

    // 현재 루트 값이 val이면 root 반환
    if(root.val === val) return root;

    // 만약 root===val을 찾으면 그 값만 계속 반환될 것
    return searchBST(root.left,val) || searchBST(root.right,val);
};
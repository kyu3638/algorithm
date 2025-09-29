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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    let answer = false;

    const recursive = (node, currentSum) => {
        if (answer || !node) return;

        if (!node.left && !node.right) {
            currentSum += node.val;
            if (currentSum === targetSum) {
                answer = true;
                return;
            }
        }

        if (node.left) recursive(node.left, currentSum + node.val);
        if (node.right) recursive(node.right, currentSum + node.val);
    }

    recursive(root, 0);

    return answer;
};
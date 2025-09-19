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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
    const result = [];
    const currentPath = [];

    const backtrack = (node) => {
        currentPath.push(node.val);

        if (node.left === null && node.right === null) {
            result.push(currentPath.join('->')); 
            currentPath.pop();
            return;
        }

        if (node.left) {
            backtrack(node.left);
        }
        if (node.right) {
            backtrack(node.right);
        }

        currentPath.pop();
    }

    backtrack(root);
    return result;
};
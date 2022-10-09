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
 * @return {number[]}
 */
 var postorderTraversal = function(root) {
    
    // postOrder: left, right, root
    
    let data = [];
    
    function traverse(node) {
        if (!node) return;
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node.val);
    }
    
    traverse(root);
    return data;
};
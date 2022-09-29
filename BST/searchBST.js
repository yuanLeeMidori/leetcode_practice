//  700. Search in a Binary Search Tree


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
    
    // when root doesn't exist
    if (!root) return null;
    
    // check from current root, and its right, and left 
    let found = false,
        current = root;
    while (current && !found) {
        if (val === current.val) {
            found = true;
            return current;
        }
        else if (val > current.val) {
            current = current.right;
        } else if (val < current.val) {
            current = current.left;
        }
    }
    
    // after running through the whole tree
    return null;
    
};
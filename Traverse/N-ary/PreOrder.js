/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    
    let results = [];
    
    function traverse(node) {
        if (!node) return;
        results.push(node.val);
        for (let i = 0; i < node.children.length; i++) {
            if (node.children[i]) traverse(node.children[i]); 
        }
    }
    
    traverse(root);
    return results;
    
};
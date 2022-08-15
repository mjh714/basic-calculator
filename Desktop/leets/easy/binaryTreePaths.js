/*
Given the root of a binary tree, return all root-to-leaf paths in any order.

A leaf is a node with no children.

 

Example 1:


Input: root = [1,2,3,null,5]
Output: ["1->2->5","1->3"]
Example 2:

Input: root = [1]
Output: ["1"]
*/



/*
set a base case if no root just return []

create result array = []

traversal takes in node and currentPath as string
add node val to currentPath

if there are no children push currentPath into result array

if there is a left child call the traversal on node.left and currentPath + ->
if there is a right child call the traversal on node.right and currentPath + ->

call traversal with root, ""
return result array
*/


const binaryTreePaths = (root) => {
    if(!root) return [];
    
    const result = [];
    function traverse(node, currentPath){
        currentPath += node.val;
        
        if(!node.left && !node.right){
           result.push(currentPath)
           }
        if(node.left) traverse(node.left, currentPath + '->')
        if(node.right) traverse(node.right, currentPath + '->')
    }
    traverse(root, "")
    return result;
};
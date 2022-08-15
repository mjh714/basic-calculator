/*
Given the root of a binary tree with unique values and the values of two different nodes of the tree x and y, return true if the nodes corresponding to the values x and y in the tree are cousins, or false otherwise.

Two nodes of a binary tree are cousins if they have the same depth with different parents.

Note that in a binary tree, the root node is at the depth 0, and children of each depth k node are at the depth k + 1.


Example 1:


Input: root = [1,2,3,4], x = 4, y = 3
Output: false
Example 2:


Input: root = [1,2,3,null,4,null,5], x = 5, y = 4
Output: true
Example 3:


Input: root = [1,2,3,null,4], x = 2, y = 3
Output: false

*/


/*
keep track of depth with root and node x or y
set base case if there is no root return null
check if the val of the root is = to node which will be either x or y 
return the depth
recursive call function to go through root's left and right incrementing depth 

keep track if they have the same parent with root, x, and y
if there is no root retun false

check if there is a left and right AND check if the left value is = to x and right value is = to y
or 
there is a left and right AND left val is = to y and right val is = to x
return true
recursive call on left and right of root

in main function return 
*/

const isCousins = (root, x, y) => {
    return (sameParent(root, x, y) && findDepth(root, x) === findDepth(root, y))
};

const findDepth = (root,node ,depth=0) => {
    if(!root) return null;
    if(root.val === node) return depth;
    return findDepth(root.left, node, depth+=1) || findDepth(root.right, node, depth+=1);
};

const sameParent = (root, x, y) => {
    if(!root) return false;
    if(root.left && root.right && root.left === x && root.right === y) return true;
    if(root.left && root.right && root.left === y && root.right === x) return true;
    
    return sameParent(root.left, x, y) || sameParent(root.right, x, y)
};
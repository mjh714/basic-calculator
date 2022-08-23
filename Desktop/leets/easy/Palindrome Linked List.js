/******************* PROBLEM **********************
Given the head of a singly linked list, return true if it is a palindrome.

Example 1:


Input: head = [1,2,2,1]
Output: true
Example 2:


Input: head = [1,2]
Output: false
 */


/********************* APPROACH ****************
create a string for forward and backward

loop while head is not null
    add the value to end of string going forward
    add value to front of string going backward

return forward equal to backward

time:O(n)
space:O(n)
*/

//*************** CODE *****************
const isPalindrome = (head) => {
    let forward = '';
    let backward = '';
    
    while (head !== null) {
        forward += head.val;
        backward = head.val + backward;
        head = head.next;
        }
    return forward === backward;
};
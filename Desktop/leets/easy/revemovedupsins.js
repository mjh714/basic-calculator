/*
You are given a string s consisting of lowercase English letters. A duplicate removal consists of choosing two adjacent and equal letters and removing them.

We repeatedly make duplicate removals on s until we no longer can.

Return the final string after all such duplicate removals have been made. It can be proven that the answer is unique.

 

Example 1:

Input: s = "abbaca"
Output: "ca"
Explanation: 
For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".
Example 2:

Input: s = "azxxzy"
Output: "ay"
*/


/*
create an array

loop through the string 
if the current char is not the last char in the array
push it onto the array
otherwise
take the element off the array

return the array joined ''

time:O(n) n being length of s
space:O(n) n being length of s 
*/

const removeDuplicates = (s) => {
    let ans = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] !== ans[ans.length -1]){
            ans.push(s[i]);
        } else {
            ans.pop();
        }
    }
    return ans.join('');
};
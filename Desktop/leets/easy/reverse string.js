/*
Write a function that reverses a string. The input string is given as an array of characters s.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
 

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
 

Follow up: Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.


*/

const reverseString = (s) => {
    let left = 0;
    let right = s.length -1;
    
    while (left < right) {
        [s[left++], s[right--]] = [s[right], s[left]]

    }
    return s;
};


/*
set a variable for the front and for the back of the array
while the front is less than the back 
set the next elemnt = to the current element
*/
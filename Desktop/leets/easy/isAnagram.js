/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

/*
base case if the lengths are not the same return false

create a mapping 
loop through s
if mapping has the current letter
add to its count 
otherwise set it to 1

loop through t 
if mapping has the current letter 
decrement the count check if that value is now 0 then remove it
if the mapping does not have the current letter
return false right away

return true 
*/


const isAnagram = (s, t) => {
    if(s.length !== t.length) return false;
    
    const letMap = new Map();
    for(let letter of s){
        if (letMap.has(letter)){
            letMap.set(letter, letMap.get(letter)+ 1);
        } else {
            letMap.set(letter, 1);
        }
    }
    
    for(let char of t){
        if(!letMap.has(char)){
           return false;
           } else {
               if(letMap.get(char) - 1 === 0){
                  letMap.delete(char)
                  } else {
                      letMap.set(char, letMap.get(char) - 1)
                  }
           }
    }
    return true;
};
/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1
*/



/*
create map
loop string s
add the chars to map with values

loop string s check if the value is one 
return that idx
if not continue

return -1 
*/


const firstUniqueChar = (s) => {
    const stringMap = new Map();
    
    for(let i = 0; i < s.length; i++){
        let char = s[i];
        if(stringMap.has(char)) {
            stringMap.set(char, 2)
        } else {
            stringMap.set(char, 1)
        }
    }
    
    for(let j = 0; j < s.length; j++){
        let currChar = s[j]
        if(stringMap.get(currChar) === 1){
           return j;
           }
    }
    return -1;
};
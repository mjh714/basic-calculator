/*
Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

 

Example 1:

Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
Output: "ball"
Explanation: 
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"), 
and that "hit" isn't the answer even though it occurs more because it is banned.
Example 2:

Input: paragraph = "a.", banned = []
Output: "a"
 

Constraints:

1 <= paragraph.length <= 1000
paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
0 <= banned.length <= 100
1 <= banned[i].length <= 10
banned[i] consists of only lowercase English letters.
*/

const mostCommonWord = (paragraph, banned) => {
    let map = {};
   
   let words = paragraph.toLowerCase().split(/\W+/g);
   
   for(const word of words){
       if(!map[word]){
          map[word] = 1;
          } else {
              map[word]++;
          }
   }
   
   return Object.keys(map).sort((a,b) => {
       return map[b] - map[a]
   }).filter(word => !banned.includes(word))[0];
};

/*
create object to hold each word

split paragraph on regex of /\W+/g
loop through the new array of words
if the word is not in the object 
add it and set it equal to 1
if it is add 1 to to its value

sort the object keys from their values

return the first element from the object that is not included in banned
*/
/* 
In an alien language, surprisingly they also use english lowercase letters, but possibly in a different order. The order of the alphabet is some permutation of lowercase letters.

Given a sequence of words written in the alien language, and the order of the alphabet, return true if and only if the given words are sorted lexicographicaly in this alien language.


Example 1:

Input: words = ["hello","leetcode"], order = "hlabcdefgijkmnopqrstuvwxyz"
Output: true
Explanation: As 'h' comes before 'l' in this language, then the sequence is sorted.
Example 2:

Input: words = ["word","world","row"], order = "worldabcefghijkmnpqstuvxyz"
Output: false
Explanation: As 'd' comes after 'l' in this language, then words[0] > words[1], hence the sequence is unsorted.
Example 3:

Input: words = ["apple","app"], order = "abcdefghijklmnopqrstuvwxyz"
Output: false
Explanation: The first three characters "app" match, and the second string is shorter (in size.) According to lexicographical rules "apple" > "app", because 'l' > '∅', where '∅' is defined as the blank character which is less than any other character (More info).
 

Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 20
order.length == 26
All characters in words[i] and order are English lowercase letters.
*/

const isAlienSorted = (words, order) => {
    for (let i = 0; i < words.length - 1; i++) { // words = "word", "world" i = 0
      let currWord = words[i] // "word"
      let nextWord = words[i + 1] // "world"
      
      let maxLength = maxLen(currWord, nextWord)
      
      for (let j = 0; j < maxLength; j++) {
        let charA = currWord[j]
        let charB = nextWord[j]
        
        
        if (charA === charB) {
          continue;
        } 
        if (charB === undefined) {
          return false
        } else if(charA === undefined) {
          break;
        }
        if (order.indexOf(charA) < order.indexOf(charB)) {
          break;
        } else {
          return false;
        }
      }
    }
    return true;
  };
  
  const maxLen = (currWord, nextWord) => {
    if (currWord.length > nextWord.length) {
      return currWord.length
    } else {
      return nextWord.length
    }
  }
  /*
  Input: arr of words, str representing dictionary order 
  Goal: return true if sorted lexicographically (lower order to higher)
        return false otherwise 
  
  Overview: go through each word, compare char by char against each other and see if the order is low to high 
  
  Steps: 
  - Iterate over the words, looking at currWord (charA) and nextWord (charB)
  - Iterate over maximum length of currWord and nextWord
  - For each char:
  If they are equal, continue to next char 
  (If they are not equal) 
  -> If charB undefined, return False
  -> If charA undefined, continue to next word
  -> Compare the order: look at location of charA in order vs charB in order
    --> charA < charB, continue to next word
    --> charB < charA, return False 
  
  - After the loop, return True (b/c we didn't return false anywhere)
  */
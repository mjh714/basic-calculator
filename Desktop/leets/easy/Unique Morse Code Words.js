/* 
**************** PROBLEM DESCRIPTION ***********************************
International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows:

'a' maps to ".-",
'b' maps to "-...",
'c' maps to "-.-.", and so on.
For convenience, the full table for the 26 letters of the English alphabet is given below:

[".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
Given an array of strings words where each word can be written as a concatenation of the Morse code of each letter.

For example, "cab" can be written as "-.-..--...", which is the concatenation of "-.-.", ".-", and "-...". We will call such a concatenation the transformation of a word.
Return the number of different transformations among all words we have.

Example 1:

Input: words = ["gin","zen","gig","msg"]
Output: 2
Explanation: The transformation of each word is:
"gin" -> "--...-."
"zen" -> "--...-."
"gig" -> "--...--."
"msg" -> "--...--."
There are 2 different transformations: "--...-." and "--...--.".
Example 2:

Input: words = ["a"]
Output: 1
*/


/* 
********************* APPROACH **************************
create a set to hold unique morse code transformations

loop through the words
    create an empty string for each new word

    loop through each letter of the word
        set its idx to the letter char code at 0 - 97 for ascii
        add to the string for the word the value from the morse array at the idx
    
    add the string to the set
    
return the size of the set

time:O(n*m) n -> length of words array, m -> length of each word
space:O(n) n -> length of words array

*/


// ********************* CODE ***************************


const uniqueMorseRepresentations = (words) => {
    const morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    let output = new Set();
    
    for(let word of words){
        let morseWord = '';
        for(let letter of word){
            let idx = letter.charCodeAt(0) - 97;
            morseWord += morse[idx];
        }
        output.add(morseWord);
    }
    return output.size;
};
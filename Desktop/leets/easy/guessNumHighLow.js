/*
We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

-1: Your guess is higher than the number I picked (i.e. num > pick).
1: Your guess is lower than the number I picked (i.e. num < pick).
0: your guess is equal to the number I picked (i.e. num == pick).
Return the number that I picked.

Example 1:

Input: n = 10, pick = 6
Output: 6
Example 2:

Input: n = 1, pick = 1
Output: 1
Example 3:

Input: n = 2, pick = 1
Output: 1
*/


/*
set left = 1 
set right = to n

while left is < than right
    set mid = to left+right divieded by 2 floored
    
    if guess at mid is = to 0 return mid
    
    if guess(mid) === -1
        set right = to mid
    else 
        set left = to mid + 1
        
    return left      
*/

const guessNumber = (n) => {
    let left = 1;
    let right = n;
    
    while(left < right) {
        let mid = Math.floor((left+right)/2);
        
        if(guess(mid) === 0) return mid;
        if(guess(mid) === -1){
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};
/*
Given a non-negative integer x, compute and return the square root of x.

Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.

Note: You are not allowed to use any built-in exponent function or operator, such as pow(x, 0.5) or x ** 0.5.

Example 1:

Input: x = 4
Output: 2
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
*/


/*
left = 1
right = x + 1

while left < right
    mid = floor left + right /2
    
    if mid times mid is greater than x
        right = mid
    else
        left = mid + 1

return left -1 because we added 1 to x
*/

const mySqrt = (x) => {
    let left = 1;
    let right = x + 1;
    
    while(left < right){
          let mid = Math.floor((left+right)/2);
        if(mid* mid > x){
            right = mid;
        }  else {
            left = mid + 1
        }
    }
    return left -1;
};
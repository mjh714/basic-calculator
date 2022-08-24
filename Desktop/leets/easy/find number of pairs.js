/**************** PROBLEM ***************
Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

The value of |x| is defined as:
x if x >= 0.
-x if x < 0.

Input: nums = [1,2,2,1], k = 1
output: 4

[0, 1], [0, 2], [1, 3], [2, 3]

Input: nums = [1,3], k = 3
Output: 0
 */

/************* APPROACH *****************
Approach 1: 

have a counter for pairs

nested loop
  check if i < j
    check if absolute val of nums at i - nums at j is equal to k
      increment counter

return counter

time:O(n^2)
space:O(1)


Approach 2:

have a counter for number of pairs
have an object for the numbers in the array

loop through array  
  add each num to object and its index as its value

loop through array again
  check if the object has a number greater than current number
  AND their absolute difference is equal to k
    increment counter
  
return counter

time:O(n)
space:O(n)
 */

// ********* CODE *************

const findNumOfpairs = (arr, k) => {
    let counter = 0;
    let numMap = new Map();
  
    for(let i = 0; i < arr.length; i++){
      if(!numMap.has(arr[i])){
        numMap.set(arr[i], 1);
      } else {
        numMap.set(arr[i], numMap.get(arr[i]) + 1);
      }
    }
  
    for(let i = 0; i < arr.length; i++){
      if(numMap.has(arr[i] - k)){
        counter += numMap.get(arr[i] - k);
      }
    }
    return counter;
  };
/**************** PROBLEM **************************************
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 */


/***************** APROACH *************************************
nums = [3,2,3] map = {  }
create an object/map

loop through the nums
    if the map does not have the current number
        set it in the map equal to 1 -> 3 : 1
    else the map has the current number as a key
        re-set it in the map to what the map had before plus 1
    
loop through the map
    if the value is greater than nums length / 2 
        return that key (number)

time:O(n) n -> the length of array
space:O(n) n -> the length of array
 */

// *************** CODE *************************

const majorityElement = (nums) => {
    let numMap = new Map();
    const majority = nums.length / 2;
    
    for (let num of nums) {
        if (!numMap.has(num)) {
            numMap.set(num, 1);
           } else {
               numMap.set(num, numMap.get(num) + 1);
           }
    }
  
    for (let n of numMap) {  
        if (numMap.get(n[0]) > majority) {
            return n[0];
            }
    }
};

// console.log(majorityElement([3,2,3]));
// console.log(majorityElement([3,2,3,4,3,5,9,8,3]));
// console.log(majorityElement([1]));
// console.log(majorityElement([]));

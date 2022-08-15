/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

const containsDuplicate = (nums) => {
    let obj = {}
    
    for (let i = 0; i < nums.length; i++) {
        if (obj.hasOwnProperty(nums[i])) {
            return true
            } else {
                obj[nums[i]] = 1
            }
    }
    return false;
};
console.log(containsDuplicate([1,2,3,1]));
/*
steps:
create empty object,
loop through array(nums),
check if the number exists in object
if exists 
return false 
else 
set the as a key with a value of 1
continue until end
return true
*/
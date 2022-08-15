/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?

 

Example 1:

Input: nums = [3,0,1]
Output: 2
Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
Example 2:

Input: nums = [0,1]
Output: 2
Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.
Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8
Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
Example 4:

Input: nums = [0]
Output: 1
Explanation: n = 1 since there is 1 number, so all numbers are in the range [0,1]. 1 is the missing number in the range since it does not appear in nums.
 

Constraints:

n == nums.length
1 <= n <= 104
0 <= nums[i] <= n
All the numbers of nums are unique.

*/

const missingNumber = (nums) => {
    let expectedSum = ((nums.length) * (nums.length + 1))/2
    let actualSum = nums.reduce((a, b) => a + b, 0);
      return expectedSum - actualSum;
};

console.log(missingNumber([3,0,1]))
/*
create 0 as the missing number
 while my index is less than the length of the array
 check if array includes my missing number
 if true the number goes up
  let missNum = 0;
    let i = 0;
    
    while (i < nums.length) {
           if (nums.includes(missNum)) {
               missNum++;
               } else {
                   return missNum;
               }
        i++;
           }
    return missNum;

use an object
save each element to object
let m = new Map()
    for (let i = 0; i < nums.length; i++) {
        m.set(nums[i],1)
    }
    for (let i = 0; i < nums.length; i++) {
        if(!m.has(i)) return i
    }
    return nums.length

Gauss formula

 let expectedSum = ((nums.length) * (nums.length + 1))/2
  let actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
*/
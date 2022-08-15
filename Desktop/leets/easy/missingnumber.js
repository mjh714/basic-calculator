/*
Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

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
 
Follow up: Could you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
*/

/*
multiply the length of array to length of array plus 1 divide by 2
to get what the array should add up to be numbered 0 to length 

loop through nums adding each number to another sum
return the diff between the two sums

time:O(n)
space:O(1)
*/

const missingNumber = (nums) => {
    let eSum = (nums.length * (nums.length +1))/2;
    let aSum = 0;
    
    for(let num of nums){
        aSum += num
    }
    return eSum - aSum;
};
/*
You are given a 0-indexed integer array nums and a target element target.

A target index is an index i such that nums[i] == target.

Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

Example 1:

Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.
Example 2:

Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.
Example 3:

Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.

*/

/*
sort nums

loop through 
    if the number is target
    push idx onto result
    
return result
time:O(nlogn) loop and sorting
space: O(n) res array
*/

const targetIndices = (nums, target) => {
    let sorted = nums.sort((a,b) => a - b);
    let res = [];
    
    for(let i = 0; i < sorted.length; i++){
        let curr = sorted[i];
        if(curr === target){
            res.push(i);
        }
    }
    return res;
};
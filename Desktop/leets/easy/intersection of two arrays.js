/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.
 

Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 1000
*/

const intersection = (nums1, nums2) => {
    /*let arr = []
    let obj = {}
    
    for (let i = 0; i < nums1.length; i++) {
        if (obj.hasOwnProperty(nums1[i])) {
            obj[nums1[i]]++
            } else {
                obj[nums1[i]] = 1
            } 
        for (let j = 0; j < nums2.length; j++) {
            if (obj.hasOwnProperty(nums2[j])) {
            obj[nums2[j]]++
            } else {
                obj[nums2[j]] = 1
            
        }
    }
    
    return arr;
    */
    /*
    const setNum1 = new Set(nums1)
    const setNum2 = new Set(nums2)
    const result = []
    
    for (let num of setNum1) {
	    if (setNum2.has(num)) {
		result.push(num)
	        }
    }

return result
*/
    let firstSet = new Set();
    
     for (let num of nums1) {
         firstSet.add(num)
     }
    
    let intersectSet = new Set();
    
    for (let num of nums2) {
        if (firstSet.has(num)) {
            intersectSet.add(num)
            }
    }
    
    return Array.from(intersectSet);
};

/*
set empty array 
loop through keeping track of each element and check against the second array
if it matches add it to solution array, if not continue
return array
probably a quicker way of solving?
*/
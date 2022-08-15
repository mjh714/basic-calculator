/*

You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

 

Example 1:


Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: list1 = [], list2 = []
Output: []
Example 3:

Input: list1 = [], list2 = [0]
Output: [0]

*/


/*

   1 > 2 > 4
               => 1 > 1 > 2 > 3 > 4 > 4
   1 > 3 > 4
  
  
create a new head

base case if one list is empty return the other

set head = smaller of two values less than or = to value from list1
set the heads next = to recursive call of whatever is next from the lesser of the two values

return the head
  

*/



const mergeTwoLists = (list1, list2) => {
    let head = null;
    
    if(list1 === null) return list2;
    if(list2 === null) return list1;
    
    head = list1.val <= list2.val ? list1 : list2;
    head.next = list1.val <= list2.val ? mergeTwoLists(list1.next, list2) : mergeTwoLists(list1, list2.next);
    
    return head;
};
/*
Given two non-negative integers num1 and num2 represented as string, return the sum of num1 and num2.

Note:
The length of both num1 and num2 is < 5100.
Both num1 and num2 contains only digits 0-9.
Both num1 and num2 does not contain any leading zero.
You must not use any built-in BigInteger library or convert the inputs to integer directly.
*/

const addStrings = (num1, num2) => { 
    let ans = []; 
    
    let carry = 0; 
    
 
    let p1 = num1.length-1; 
    let p2 = num2.length-1; 
    
    
    while(p1 >= 0 || p2 >= 0){
        let x1 = (p1 >= 0) ? num1[p1] - '0' : 0; 
        let x2 = (p2 >= 0) ? num2[p2] - '0' : 0; 
        
        let sum = x1 + x2 + carry; 
        let value = sum%10; 
        carry = Math.floor(sum/10);
        
        ans.push(value); 
        p1--; 
        p2--; 
    }
  
    if (carry) ans.push(carry); 
    
    return ans.reverse().join(''); 
    
};

/*
set pointers to end of each string 
loop through each string while either still has characters left 
 if there are characters left in the string, return the character as a number through implicit type coercion, 
     otherwise return a 0
     calculate our total sum at this point 
     calculate value as the remainder of our current sum divided by 10 
     calculate carry as the quotient of our current sum divided by 10
       check if there is still a carry value at the end of the loop 
        if so, push onto res
        reverse the array and join into a string to return 
        
*/
/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . The right to left diagonal = . Their absolute difference is .

Function description

Complete the  function in the editor below.

diagonalDifference takes the following parameter:

int arr[n][m]: an array of integers
Return

int: the absolute diagonal difference
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Output Format

Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19
Difference: |4 - 19| = 15

Note: |x| is the absolute value of x
*/

/*
leftSum = to 0
rightSum = to 0
rowLength = to arr[0].length

i = to 0
j = rowLength - 1

i < rowLength
j > - 1

i++
j--

leftSum += arr[i][i]
rightSum += arr[i][j]

return absolute diff of leftSum - rightSum
*/


function diagonalDifference(arr) {
    // Write your code here
    let leftSum = 0;
    let rightSum = 0;
    let rowLength = arr[0].length;
    
    for(let i = 0, j = rowLength - 1; i < rowLength, j > - 1; i++, j--){
        leftSum += arr[i][i];
        rightSum += arr[i][j];
    } 
    return Math.abs(leftSum - rightSum);
}
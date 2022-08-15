/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
*/

const maxProfit = (prices) => {
    let maxPro = 0
    let currentMin  = prices[0]
    
    for (let i = 1; i < prices.length; i++) {
        let num = prices[i]
        if (num < currentMin) {
            currentMin = num
            } else if ((num - currentMin) > maxPro ) {
              maxPro = num - currentMin
            }
    }
    return maxPro;
};

/*
set max pro = 0
set current min to first ele in arr

loop from 1 check if current number is less than current min
true? set number to min
false? check if current number - current min is greater than max pro
true? set max pro = to current number - current min
return the max pro


6, 8, 2, 3, 6, 3, 5, 10


index = 6 			-> loop
currVal = 5			-> array value of the index
currMin = 2			-> if(arr[i] < currMin) currMin = arr[i]
maxProfit = 4		-> if(currVal-currMin > maxProfit) maxProfit = currVal - currMin
*/
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
        // 최소금액을 업데이트
        if(minPrice > prices[i]) {
            minPrice = prices[i];
        }

        const profit = prices[i] - minPrice;
        if(profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;

};
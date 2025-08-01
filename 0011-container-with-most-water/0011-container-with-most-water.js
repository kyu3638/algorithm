/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let start = 0;
    let end = height.length - 1;

    let max = 0;
    // 물의 양: (end - start) * Math.min(height[start], height[end])

    while(start < end) {
        const current = (end - start) * Math.min(height[start], height[end]);
        if(current > max) {
            max = current;
        }

        if(height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
    }

    return max;
};
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

    const stack = [];
    const answer = [...Array(temperatures.length)].map(()=>0)

    for(let i = 0; i < temperatures.length; i++){
        while(stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]){
            const index = stack.pop();
            answer[index] = i - index;
        }
        stack.push(i);
    }
    
    return answer;
};
function solution(arr, divisor) {
    const result = arr.map((num)=>{
        return num % divisor === 0 ? num : undefined;
    }).filter(num=>num).sort((a,b)=>a-b);
    return result.length ? result : [-1];
}
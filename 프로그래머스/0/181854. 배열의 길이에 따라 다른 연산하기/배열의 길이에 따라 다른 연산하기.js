function solution(arr, n) {
    const isOdd = arr.length % 2;
    
    return isOdd ? arr.map((num,index)=>index%2===1 ? num:num+n) : arr.map((num,index)=>index%2===0 ? num:num+n);
}
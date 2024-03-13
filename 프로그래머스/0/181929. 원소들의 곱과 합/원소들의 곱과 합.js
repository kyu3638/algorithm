function solution(num_list) {
    const a = num_list.reduce((acc,cur)=>acc * cur,1);
    const b = num_list.reduce((acc,cur)=>acc + cur,0);
    return a < b**2 ? 1 : 0;
}
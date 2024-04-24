function solution(num) {
    return String(num).split('').reduce((acc,cur)=>acc+cur*1,0)
}
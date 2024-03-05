function solution(number) {
    return String(number).split('').reduce((acc,cur)=>acc+Number(cur),0) % 9
}
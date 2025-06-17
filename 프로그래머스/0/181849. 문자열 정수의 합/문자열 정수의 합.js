function solution(num_str) {
    return num_str.split('').reduce((acc,num)=>acc+Number(num),0);
}
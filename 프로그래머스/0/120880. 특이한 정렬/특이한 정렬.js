function solution(numList, n) {
    // n과 numList[i]의 차이의 절대값이 작은 순서로 정렬
    return numList.sort((a,b)=>{
        // return Math.abs(a - n) === Math.abs(b - n) ? b - a : Math.abs(a - n) - Math.abs(b - a);
        if(Math.abs(a-n) === Math.abs(b-n)) return b - a;
        return Math.abs(a-n) - Math.abs(b-n);
    })
}
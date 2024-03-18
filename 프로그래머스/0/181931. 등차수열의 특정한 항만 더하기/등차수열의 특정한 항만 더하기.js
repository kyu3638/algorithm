function solution(a, d, included) {
    let answer = 0;
    included.forEach((bool,index)=>{
        if(bool) {
            answer += a+d*index
        }
    })
    return answer;
}
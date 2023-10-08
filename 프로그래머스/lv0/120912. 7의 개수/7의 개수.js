function solution(array) {
    var answer = 0;
    array.map(v=>{
        v += ''
        v.split('').map(t=> t==='7'?answer+=1:null)
    })
    return answer;
}
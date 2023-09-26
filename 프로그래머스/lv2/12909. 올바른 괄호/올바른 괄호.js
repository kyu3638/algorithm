// function solution(s){
//     let stackLength = 0;
//     for (let i = 0; i < s.length; i++) {
//         stackLength += s[i] === '(' ? 1 : -1;
//         if (stackLength < 0) return false;
//     }
//     return stackLength === 0 ? true : false;
// }

function solution(s){
    let stackLength = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i]==='('){
            stackLength += 1;
        } else {
            stackLength -= 1;
        }
        if(stackLength < 0) return false;
    }
    return stackLength === 0 ? true : false;
}
function solution(myString, pat) {
    let count = 0;
    for(let i = 0; i < myString.length - pat.length + 1; i++){
        if(myString.slice(i,i+pat.length) === pat){
            count++
        }
    }
    return count
}
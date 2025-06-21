function solution(myString) {
    let answer = '';
    
    myString.split("").forEach(str => {
        if(isTargetToChange(str))
            answer += 'l';
        else
            answer += str;
    })
    
    return answer;
}

const isTargetToChange = (str) => {
    return str === "a" || str === "b" || str === "c" || str === "d" || str === "e" || str === "f" || str === "g" || str === "h" || str === "i" || str === "j" || str === "k";
}
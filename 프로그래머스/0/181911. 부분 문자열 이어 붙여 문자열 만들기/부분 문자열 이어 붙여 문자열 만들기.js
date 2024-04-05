function solution(my_strings, parts) {
    let answer = '';
    
    my_strings.forEach((str, index)=>{
        const start = parts[index][0];
        const end = parts[index][1];
        
        const part = str.slice(start, end+1);
        answer+=part;
    })
    
    return answer;
}
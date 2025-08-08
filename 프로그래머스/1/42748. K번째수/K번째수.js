function solution(array, commands) {    
    return commands.map(([start,end,index]) => {
        const arr = array.slice(start - 1,end).sort((a,b) => a-b);
        return arr[index - 1];
    });
}
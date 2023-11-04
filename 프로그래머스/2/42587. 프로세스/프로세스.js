function solution(priorities, location) {
    var answer = [];
    let q = [];
    for(let i = 0; i < priorities.length;i++){
        q.push([i,priorities[i]]);
    }
    while(q.length){
        const max = Math.max(...priorities);
        const process = q.shift();
        if(process[1] === max){
            answer.push(process[0]);
            priorities.splice(priorities.indexOf(max),1);
        } else {
            q.push(process);
        }
    }
    return answer.indexOf(location) + 1;
}
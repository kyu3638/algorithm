function solution(todo_list, finished) {
    const answer = [];
    for(let i = 0; i < todo_list.length; i++){
        if(!finished[i]) answer.push(todo_list[i])
    }
    return answer;
}
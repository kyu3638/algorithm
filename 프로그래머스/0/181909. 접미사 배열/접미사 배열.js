function solution(my_string) {
    const list = [];
    
    for(let i = my_string.length - 1; i >= 0; i--){
        if(list.length === 0){
            list.push(my_string[i]);
            continue;
        }
        list.push(my_string[i] + list[list.length - 1]);
    }    
    
    return list.sort((a,b)=>a.localeCompare(b));
}
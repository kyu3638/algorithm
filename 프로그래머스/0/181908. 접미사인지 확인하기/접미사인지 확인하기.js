function solution(my_string, is_suffix) {
    for(let i = my_string.length - 1; i >= 0; i--){
        const suffix = my_string.slice(i);
        if(suffix === is_suffix) return 1;
    }
    return 0;
}
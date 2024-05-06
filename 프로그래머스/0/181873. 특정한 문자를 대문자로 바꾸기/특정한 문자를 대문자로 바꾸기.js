function solution(my_string, alp) {
    return my_string.split('').map(s=>{
        if(s === alp) return s.toUpperCase();
        return s;
    }).join('')
}
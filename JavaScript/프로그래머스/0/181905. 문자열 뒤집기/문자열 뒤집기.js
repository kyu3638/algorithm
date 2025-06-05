function solution(my_string, s, e) {
    const before = my_string.slice(0, s);
    const reverse = my_string.slice(s, e + 1).split("").reverse().join("");
    const after = my_string.slice(e + 1);
    
    return before + reverse + after;
}
function solution(str_list, ex) {
    return str_list.map(str=> !str.includes(ex) ? str : "").join("")
}
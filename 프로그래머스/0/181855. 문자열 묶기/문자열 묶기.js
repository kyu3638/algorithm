function solution(strArr) {
    const obj = {};
    strArr.forEach(v=>{
        if(!obj[v.length]) obj[v.length] = 1;
        else obj[v.length]++;
    })
    return Math.max(...Object.values(obj))
}
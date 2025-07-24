function solution(n) {
    return Number([...String(n)].map(Number).sort((a,b)=>b-a).map(String).join(""));
}
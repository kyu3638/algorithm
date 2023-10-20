function solution(people, limit) {
    let answer = 0;
    people.sort((a,b)=>a-b);
    let pl = 0;
    let pr = people.length - 1;
    
    while(pl <= pr){
        if(people[pl] + people[pr] <= limit){
            pl++;
        }
        pr--;
        answer++;
    }
    return answer;
}
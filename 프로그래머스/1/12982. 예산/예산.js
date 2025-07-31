function solution(d, budget) {
    const result = d.sort((a,b)=>a-b).reduce((acc,cur)=> {
        if(budget >= cur) {
            budget = budget - cur;
            return acc+1;
        }
        return acc;
    }, 0);
    
    return result;
}
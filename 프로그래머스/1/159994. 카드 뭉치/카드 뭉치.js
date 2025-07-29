function solution(cards1, cards2, goal) {
    let index1 = 0;
    let index2 = 0;
    
    let answer = '';
    
    goal.forEach(word => {
        if(answer === "No") return;
        
        if(cards1[index1] === word) {
            index1++;
        } else if(cards2[index2] === word) {
            index2++;
        } else {
            answer = "No";
        }
    })
    
    return !answer ? "Yes" : answer;
}
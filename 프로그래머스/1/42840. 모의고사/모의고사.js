function solution(answers) {
    const a = [1,2,3,4,5];
    const b = [2,1,2,3,2,4,2,5];
    const c = [3,3,1,1,2,2,4,4,5,5];
    
    const count = (pattern) => {
        let count = 0;
        
        for(let i = 0; i < answers.length; i++) {
            if(pattern[i % pattern.length] === answers[i]) {
                count++;
            }
        }
        
        return count;
    };
    
    const countObj = {
        1:count(a),
        2:count(b),
        3:count(c)
    };
    
    const maxCount = Math.max(...Object.values(countObj));
    
    return Object.keys(countObj).filter(num => countObj[num] === maxCount).map(Number);
    
}
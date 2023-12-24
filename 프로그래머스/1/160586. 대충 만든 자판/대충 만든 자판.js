function solution(keymap, targets) {
    const answer = [];
    
    const obj = new Object;
    
    for(let i = 0; i < keymap.length; i++){
        for(let j = 0; j < keymap[i].length; j++){
            const letter = keymap[i][j];
            if(!obj[letter]) {
                obj[letter] = j + 1;
            }
            else if(j + 1 < obj[letter]) obj[letter] = j + 1;
        }
    }
    
    for(const target of targets){
        let count = 0;
        for(const letter of target){
            if(obj[letter]) count += obj[letter]
            else {
                answer.push(-1);
                break;
            }
        }
        if(answer[targets.indexOf(target)] === -1) continue;
        else answer.push(count);
    }
    
    return answer;
}
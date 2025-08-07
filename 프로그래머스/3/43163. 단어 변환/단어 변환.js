function solution(begin, target, words) {
    const visited = Array.from({length:words.length}, () => false);
    
    const queue = [[begin, 0]];
    let index = 0;
    
    while(index < queue.length) {
        const [word, d] = queue[index++];
        
        if(word === target) return d;
        
        for(let i = 0; i < words.length; i++) {
            if(!visited[i]) {
                let diffCount = 0;
                for(let j = 0; j < word.length; j++) {
                    if(word[j] !== words[i][j]) {
                        diffCount++;
                    }
                }
                if(diffCount === 1) {
                    queue.push([words[i], d+1]);
                    visited[i] = true;
                }
            }
        }
        
        
    }
    
    return 0;
    
}
function solution(x, y, n) {
    var answer = 0;
    const checked = [...Array(y)].map(v=>false);
    
    function bfs(){
        const q = [[y, 0]];
        while(q.length){
            const [num, count] = q.shift();
            if(num < x) continue;
            if(num === x) return count;
            checked[num] = true;
            if(num - n >= x && !checked[num - n]) q.push([num - n, count + 1]);
            if(num / 2 >= x && num % 2 === 0 && !checked[num / 2]) q.push([num / 2, count + 1]);
            if(num / 3 >= x && num % 3 === 0 && !checked[num / 3]) q.push([num / 3, count + 1]);
        }
        return -1;
    }
    
    answer = bfs(x);
    
    return answer;
}
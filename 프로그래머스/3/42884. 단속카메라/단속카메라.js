function solution(routes) {
    routes.sort((a,b)=>{
        return a[1] - b[1];
    })
    
    let count = 1;
    
    let currentEnd = routes[0][1];
    
    for(let i = 1; i < routes.length; i++) {
        if(currentEnd < routes[i][0]) {
            count++;
            currentEnd = routes[i][1];
        }
    }
    
    return count;
}
function solution(arrayA, arrayB) {
    arrayA.sort((a,b)=>a-b);
    arrayB.sort((a,b)=>a-b);
    
    const a = [];
    for(let i = arrayA[0]; i > 1; i--){
        if(arrayA.every(v => v % i === 0)) a.push(i);
    }
    const b = [];
    for(let i = arrayB[0]; i > 1; i--){
        if(arrayB.every(v => v % i === 0)) b.push(i);
    }
    
    function find(commonArr, targetArr){
        for(const num of commonArr){
            if(!targetArr.some(v => v % num === 0)) return num;
        }
        return 0;
    }
    
    return Math.max(find(a,arrayB), find(b,arrayA));
}
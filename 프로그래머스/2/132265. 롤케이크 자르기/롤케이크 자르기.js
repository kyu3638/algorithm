function solution(topping) {
    let answer = 0;
    const aSet = new Set();
    const bSet = new Set();
    const aLen = [];
    const bLen = [];
    const bLenReverse = [];
    
    topping.forEach((v,i)=>{
        aSet.add(v);
        bSet.add(topping[topping.length - 1 - i]);
        aLen.push(aSet.size);
        bLen.push(bSet.size);
    })
    
    for(let i = bLen.length - 1; i >= 0; i--){
        bLenReverse.push(bLen[i]);
    }
    
    for(let i = 0; i < topping.length - 1; i++){
        if(aLen[i] === bLenReverse[i+1]) answer++;
    }
    
    return answer;
}
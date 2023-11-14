function solution(topping) {
    // 롤케이크를 공평하게 나누는 경우의 수
    let answer = 0;
    // 중복된 값을 고려하지 않기위한 철수와 동생의 조각을 Set으로 정리
    const aSet = new Set();
    const bSet = new Set();
    // index별로 잘랐을 때 철수와 동생이 몇 조각씩 취할 수 있는지를 담는 배열
    const aLen = [];
    const bLen = [];
    // bLen의 경우 뒤에서부터 센 케이크 종류를 앞에서부터 담았기 때문에 나중에 뒤집어 줌
    const bLenReverse = [];
    
    // topping의 각 v와 인덱스 i별로
    topping.forEach((v,i)=>{
        // 철수는 앞에서부터, 동생은 뒤에서부터 하나씩 담아가면서 
        aSet.add(v);
        bSet.add(topping[topping.length - 1 - i]);
        // 해당 인덱스에서 자를 때의 철수와 동생이 취할 수 있는 종류의 수를 담음
        aLen.push(aSet.size);
        bLen.push(bSet.size);
    })
    // 동생의 경우 뒤집어 줌
    for(let i = bLen.length - 1; i >= 0; i--){
        bLenReverse.push(bLen[i]);
    }
    // 인덱스 i 와 i+1 사이를 잘랐을 때 둘의 토핑 개수가 같다면 answer++
    for(let i = 0; i < topping.length - 1; i++){
        if(aLen[i] === bLenReverse[i+1]) answer++;
    }
    
    return answer;
}
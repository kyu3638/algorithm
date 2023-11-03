function solution(X, Y) {
    var answer = '';
    const numObjA = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,0:0};
    const numObjB = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,0:0};
    const numObj = {1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,0:0};
    for(let i = 0; i < X.length; i++){
        numObjA[X[i]] += 1;
    }
    for(let i = 0; i < Y.length; i++){
        numObjB[Y[i]] +=1;
    }
    for(let i = 0; i < 10; i++){
        if(numObjA[i] <= numObjB[i]) numObj[i] = numObjA[i];
        else numObj[i] = numObjB[i];
    }
    let zeroAll = 0;
    for(let i = 1; i < 10; i++){
        if(numObj[0] > 0 && numObj[i] === 0){
            zeroAll++;
        }
    }
    if(zeroAll === 9) return "0"
    
    let countZero = 0;
    for(let i = 9; i>=0;i--){
        if(numObj[i] > 0){
            for(let j = 0; j < numObj[i]; j++){
                answer += String(i);
            }
        } else {
            countZero++;
        }
        if(countZero === 10) return "-1"
    }
    
    return answer;
}
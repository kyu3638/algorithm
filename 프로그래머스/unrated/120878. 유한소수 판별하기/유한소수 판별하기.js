function solution(a, b) {
    // 정수이고
    for(let i = 0; i < 1; ){
        if(b % 2 === 0) b = b / 2;
        else i = 1;
    }
    for(let i = 0; i < 1; ){
        if(b % 5 === 0) b = b / 5;
        else i = 1;
    }
    if(b === 1) return 1;
    else {
        for(let i = 3; i <= a; i++){
            if(a % i === 0 && b % i === 0){
                for(let j = 0; j < 1; ){
                    a = a / i;
                    b = b / i;
                    if(a % i !== 0 || b % i !== 0) j = 1;
                }
            }
        }
        if(b === 1) return 1;
    }
    return 2;
}
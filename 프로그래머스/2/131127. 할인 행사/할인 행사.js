function solution(want, number, discount) {
    let answer = 0;
    
    const wantObj = {};
    for(let i = 0; i < want.length; i++){
        wantObj[want[i]] = number[i]
    }

    const discountObj = {};
    for(let i = 0; i < 10; i++){
        if(!discountObj[discount[i]]) discountObj[discount[i]] = 0;
        discountObj[discount[i]]++;
    }
    
    for(let i = 0; i <= discount.length - 10; i++){
        let check = 0;
        for(const item of want){
            if(wantObj[item] === discountObj[item]) check++;
            else break;
        }
        if(check === want.length) answer++;
        
        discountObj[discount[i]]--;
        if(!discountObj[discount[i+10]]) discountObj[discount[i+10]]=0;
        discountObj[discount[i+10]]++;
    }
    
    return answer;
}
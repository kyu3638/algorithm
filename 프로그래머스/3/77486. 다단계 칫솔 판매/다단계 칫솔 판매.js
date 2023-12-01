function solution(enroll, referral, seller, amount) {
    const recommendation = new Object();
    // const sellData = new Object();
    const profit = new Object();
    
    // 멤버 : 멤버 추천인으로 구성된 객체
    // 멤버 : 수익금(초기 0) 객체 만들기
    for(let i = 0; i < enroll.length; i++){
        if(referral[i] !== '-') {
            recommendation[enroll[i]] = referral[i];
            profit[enroll[i]] = 0;
        }
        else {
            recommendation[enroll[i]] = '';
            profit[enroll[i]] = 0;
        }
    }
    
    // 멤버 : 판매액으로 구성된 객체 만들기
    // for(let i = 0; i < seller.length; i++){
    //     sellData[seller[i]] = amount[i]*100;
    // }
    
    // 누군가 판매를 달성했을 때 추천인에게 돈을 적립하고, 추천인의 적립금의 10%를 추천인의 추천인에게도 10%씩 재귀적으로 적립하는 함수
    // person과 그가 받는 money를 인자로 함
    function distribute(person, money){
        // money가 10보다 작으면 그냥 돈을 갖고 끝냄
        if(money < 10) {
            profit[person] += money;
            return;
        }
        
        const moneyPersonGet = money - Math.floor(0.1 * money);
        profit[person] += moneyPersonGet;
        // ''는 트리의 top(민호는 자료에 포함되지 않음)
        if(recommendation[person] !== ''){
            distribute(recommendation[person], Math.floor(0.1 * money));
        }
    }
    
    for(let i = 0; i < seller.length; i++){
        distribute(seller[i], amount[i]*100);
    }
    const answer = [];
    for(let i = 0; i < enroll.length; i++){
        answer.push(profit[enroll[i]])
    }
    return answer;
}
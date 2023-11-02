function solution(chicken) {
    var answer = 0;
    let coupon = chicken;
    while(coupon / 10 >= 1){
        const couponChicken = Math.floor(coupon / 10)
        answer += couponChicken;
        coupon = (coupon % 10) + couponChicken; 
    }
    return answer;
}
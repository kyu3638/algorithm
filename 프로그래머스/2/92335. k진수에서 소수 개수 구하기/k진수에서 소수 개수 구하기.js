function solution(n, k) {
    var answer = 0;
    
    // k진법의 수로 만들기 위해 number라는 배열 만들어줌
    let number = [];
    while(Math.floor(n / k) !== 0){
        // n 을 k로 나눈 나머지 num을 number의 앞으로 넣고
        const num = n % k;
        number.unshift(num);
        // n을 k로 나눈 몫을 n으로 업데이트 해줌
        n = Math.floor(n / k);
        // n이 k로 나눌 수 없는 마지막 숫자면 number에 넣어줌
        if(n < k) number.unshift(n);
    }
    // 이걸 묶으면 k진법의 수 n
    number = number.join('').split(0)
    const numLen = number.length;
    // 1이나 ''있으면 소수 아니므로 없애줘
    for(let i = 0; i < numLen; i++){
        if(number[i] === '1' || number[i] === ''){
            number.splice(i,1);
            // splice때문에 탐색 못하는 값들이 생기는 것을 방지
            i = i - 1;
        }
    }
    
    // 소수 판별하는 함수
    function isPrime(num) {
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                return false;
            }
        }
        return true
    }
    
    function isPrime(num) {
        if(num <= 1) return false;
        if(num === 2) return true;
        const sqrt = parseInt(Math.sqrt(num));
        for(let i = 3; i <= sqrt; i += 2){
            if(num % i === 0) return false;
        }
        return true;
    }
    
    // number의 원소 중 소수 찾으면 answer++
    for(let i = 0; i < number.length; i++){
        if(isPrime(number[i])) answer++;
    }
    
    return answer;
}
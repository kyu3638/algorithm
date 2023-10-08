function solution(bin1, bin2) {
    var answer = '';
    let sum = Number(bin1) + Number(bin2);
    // 두 정수의 합을 구하고
    sum = String(sum).split('').map(v => Number(v));
    // 뒤에서부터 요소를 확인하면서
    for(let i = sum.length - 1; i >= 0; i--){
        // 요소가 2보다 크면
        if(sum[i] >= 2){
            // 앞자리 수를 늘려줘야하므로 -2
            sum[i] -= 2;
            // 앞자리 수의 index가 0이상이면 += 1 해주고
            if((i - 1) >= 0){
                sum[i-1] += 1;
            }
            // 앞자리 수의 index가 0보다 작으면 자리수가 늘어나는 것이므로 unshift(1)해준다.
            else {
                sum.unshift(1);
            }
        }
    }
    answer = String(sum.join(''));
    return answer;
}
function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    // 배송, 픽업이 모두 완료되어야 하므로 초기 값 구함
    let numToDeliver = deliveries.reduce((acc,cur)=>acc+cur,0);
    let numToPickup = pickups.reduce((acc,cur)=>acc+cur,0);
    
    // 뒤에서부터 0을 제거해주는 함수
    function deleteZero(arr){
        for(let i = arr.length - 1; i >= 0; i--){
            if(arr[i] === 0) arr.pop();
            else return;
        }
    }
    
    // 배송, 픽업처리를 하는 함수
    function handleItem(arr, cap){
        let count = 0;
        for(let i = arr.length - 1; i >= 0; i--){
            if(arr[i] >= cap){
                arr[i] -= cap;
                count += cap;
                break;
            } else {
                cap -= arr[i];
                count += arr[i];
                arr[i] = 0;
            }
        }
        return count;
    }
    
    while(numToDeliver > 0 || numToPickup > 0){
        deleteZero(deliveries);
        deleteZero(pickups);
        const len = Math.max(deliveries.length, pickups.length);
        answer += len * 2;
        numToDeliver -= handleItem(deliveries, cap);
        numToPickup -= handleItem(pickups, cap);
    }
    
    return answer;
}
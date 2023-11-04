function solution(bridge_length, weight, truck_weights) {
    // 1초에서부터 시작..
    var time = 1;
    // 다리 위 트럭들의 중량
    let weight_on_bridge = truck_weights[0];
    // 첫번째 트럭이 올라간 상태
    const q = [[truck_weights.shift(),1]];
    while(q.length > 0){
        // 트럭들이 다리위에 올라가서 경과된 시간++
        let len = q.length;
        // 다리를 건널 시간만큼이 지나면 트럭 제외해주고 다리위 중량 감소
        if(q[0][1] > bridge_length){
            weight_on_bridge -= q[0][0];
            q.shift();
        }
        // 한 대 더 올라올 수 있는 여건이 되면 큐에 삽입
        if(weight_on_bridge + truck_weights[0] <= weight){
            weight_on_bridge += truck_weights[0];
            q.push([truck_weights.shift(),1]);
        }
        // 큐의 길이 === 0, 즉 모든 트럭이 지나간 경우 반복 종료
        if(q.length === 0) break;
        
        // 시간이 지나고, 모든 트럭이 가진 시간을 늘려줌
        time++;
        for(let i = 0; i < q.length; i++){
            q[i][1]++;
        }
    }
    return time;
}
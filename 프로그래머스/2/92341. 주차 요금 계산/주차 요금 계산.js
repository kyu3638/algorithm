function solution(fees, records) {
    // 차량의 번호를 중복없이 담을 배열
    let carNum = [];
    for(let i = 0; i < records.length; i++){
        carNum.push(records[i].slice(6,10))
    }
    carNum = new Set(carNum);
    carNum = [...carNum]
    
    carNum.sort((a,b)=>a-b)
    
    const inOut = [...Array(carNum.length)].map(()=>[]);
    records = records.map(v=>{
        v = v.split(' ')
        v = [...v[0].split(':'), v[1], v[2]];
        return v
    })
    
    
    
    carNum.map((x,i) => {
        records.map(y => {
            if(x === y[2]) inOut[i].push(y);
        })
    })
    
    const cost = [];
    for(const car of inOut){
        let costMinutes = 0;
        for(let i = 0; i < car.length; i++){
            if(car.length % 2 === 1 && i === car.length - 1){
                const hours = 23 - car[i][0];
                const minutes = 59 - car[i][1]
                costMinutes += hours * 60 + minutes;
            } else {
                if(i % 2 === 1 ) continue;
                else {
                    const minutes = car[i+1][1] > car[i][1] ? car[i+1][1] - car[i][1] : 60 - (car[i][1] - car[i+1][1])
                    const hours = car[i+1][1] > car[i][1] ? car[i+1][0] - car[i][0] : car[i+1][0] - car[i][0] - 1;
                    costMinutes += hours * 60 + minutes;
                }
            }
        }
        if(costMinutes <= fees[0]) cost.push(fees[1]);
        else if(costMinutes > fees[0]) cost.push(fees[1] + Math.ceil((costMinutes - fees[0])/fees[2])*fees[3])
    }
    return cost
}
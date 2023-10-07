function solution(emergency) {
    var answer = [];
    for(let i = 0; i < emergency.length; i++){
        emergency[i] = [i, emergency[i], 0];
    }
    emergency.sort((a,b)=>b[1]-a[1]);
    for(let i = 0; i < emergency.length; i++){
        emergency[i][2] = i+1
    }
    
    emergency.sort((a,b)=>a[0]-b[0]);
    
    for(let i = 0; i < emergency.length;i++){
        emergency[i] = emergency[i][2];
    }
    
    return emergency;
}
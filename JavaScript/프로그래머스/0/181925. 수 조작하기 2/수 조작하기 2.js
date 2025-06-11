function solution(numLog) {
    var answer = '';
    
    numLog.forEach((num,index,arr)=>{
        if(index === numLog.length - 1) return;
        
        const diff = arr[index + 1] - num;
        switch(diff){
            case 1:
                answer += "w";
                break;
            case -1:
                answer += "s";
                break;
            case 10:
                answer += "d";
                break;
            case -10:
                answer += "a";
                break;
        }
    })
    
    return answer;
}
function solution(array, n) {
    var answer = 0;
    let temp = [];
    for(let i = 0; i < array.length; i++){
        let diff = n - array[i];
        if(diff < 0){
            diff = -diff;
        }
        temp.push([diff,array[i]]);
    }
    temp = temp.sort(([a,b],[c,d])=>a===c?b-d:a-c);
    answer = temp[0][1];
    return answer;
}
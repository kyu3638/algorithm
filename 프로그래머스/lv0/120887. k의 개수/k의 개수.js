function solution(i, j, k) {
    var answer = 0;
    let temp = [];
    while(i <= j){
        temp.push(String(i).split(''));
        i++;
    }
    for(const arr of temp){
        for(const val of arr){
            if(val === String(k)){
                answer++;
            }
        }
    }
    return answer;
}
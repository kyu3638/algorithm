function solution(array) {
    var answer = [0,0];
    let index = 0;
    for(index = 0; index < array.length; index++){
        if(index + 1 >= array.length) return answer;
        if(array[index] > array[index + 1]){
            answer[0] = array[index]
            answer[1] = index
        } else {
            answer[0] = array[index + 1]
            answer[1] = index + 1
        }
    }
    return answer;
}
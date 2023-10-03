function solution(numbers) {
    var answer = 0;
    numbers = numbers.sort((a,b)=>b-a);
    if(numbers[0] > 0 && numbers[1] > 0){
        answer = numbers[0] * numbers[1] > numbers[numbers.length - 1] * numbers[numbers.length - 2] ? numbers[0] * numbers[1]:numbers[numbers.length - 1] * numbers[numbers.length - 2];
    } else if(numbers[0] > 0 && numbers[1] < 0){
        answer = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    } else {
        answer = numbers[numbers.length - 1] * numbers[numbers.length - 2];
    }
    return answer;
}
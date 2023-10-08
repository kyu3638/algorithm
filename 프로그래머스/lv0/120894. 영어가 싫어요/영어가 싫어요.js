function solution(numbers) {
    var answer = 0;
    const stringNumbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    stringNumbers.forEach((num,index) => {
        numbers = numbers.replaceAll(num, index);
    })
    return Number(numbers);
}
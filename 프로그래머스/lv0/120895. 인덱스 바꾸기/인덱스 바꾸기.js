function solution(my_string, num1, num2) {
    let arr = [];
    console.log(arr);
    arr = my_string.split('')
    console.log(arr);
    [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
    console.log(arr);
    return arr.join('');
}
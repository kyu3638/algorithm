function solution(n, k) {
    let numbers = [];
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        numbers.push(i);
        factorial *= i;
    }

    k--; // 0-인덱스로 조정
    let result = [];

    while (numbers.length > 0) {
        factorial /= numbers.length;
        let index = Math.floor(k / factorial);
        result.push(numbers[index]);
        numbers.splice(index, 1);
        k %= factorial;
    }

    return result;
}
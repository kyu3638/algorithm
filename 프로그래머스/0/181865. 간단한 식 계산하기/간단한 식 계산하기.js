function solution(binomial) {
    const arr = binomial.split(' ');
    if(arr[1] === '+'){
        return Number(arr[0]) + Number(arr[2])
    } else if(arr[1] === '-'){
        return arr[0] - arr[2]
    } else {
        return arr[0] * arr[2];
    }
}
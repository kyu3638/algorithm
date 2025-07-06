function solution(arr, intervals) {
    return intervals.reduce((acc, [x, y]) => [...acc, ...arr.slice(x, y + 1)], [])
}
function solution(arr, query) {
    query.forEach((num,index) => {
        if(isOdd(index)) {
            arr = arr.slice(num);
        } else {
            arr = arr.slice(0, num + 1);
        }
    })
    
    return arr;
}


const isOdd = (num) => !!(num % 2);
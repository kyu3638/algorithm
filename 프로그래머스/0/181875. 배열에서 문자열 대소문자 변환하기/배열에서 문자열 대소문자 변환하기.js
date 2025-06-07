function solution(strArr) {
    return strArr.map((str,index)=>{
        return isOdd(index) ? str.toUpperCase() : str.toLowerCase();
    })
}

const isOdd = (num) => num % 2 ? true : false;
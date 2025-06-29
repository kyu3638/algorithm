function solution(arr, queries) {
    queries.forEach(([s,e])=>{
        arr.forEach((num,i) => {
            if(i >= s && i <= e){
                arr[i] = num + 1;
            }
        })
    })
    
    return arr;
}
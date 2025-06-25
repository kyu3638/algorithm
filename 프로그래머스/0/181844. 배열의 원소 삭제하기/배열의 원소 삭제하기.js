function solution(arr, delete_list) {
    delete_list.forEach(target => {
        if(arr.includes(target)){
            arr = arr.filter(num => num !== target);
        }
    })
    
    return arr;
}
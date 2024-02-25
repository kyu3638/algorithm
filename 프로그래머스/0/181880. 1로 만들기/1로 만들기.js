const isEven = (num)=>{
    return num % 2 === 0;
}

function solution(num_list) {
    let count = 0;
    num_list.forEach((num)=>{
        while(num!==1){
            if(isEven(num)){
                num = num / 2;
            } else {
                num = (num - 1) / 2;
            }
            count++;
        }
    })
    return count;
}
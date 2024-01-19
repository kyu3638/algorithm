function solution(arr) {

    let prev = [...arr]
    let current = [...arr]
    let count = 0;
    let flag = false;
    while(flag === false){
        current = current.map(num=>{
            if(num >= 50 && num % 2 === 0){
                return num / 2;
            } else if (num < 50 && num % 2 === 1){
                return 2 * num + 1;
            } else {
                return num
            }
        })
        console.log(prev)
        console.log(current)
        for(let i = 0; i < current.length; i++){
            if(prev[i] === current[i]) {
                flag = true;
            } else {
                flag = false;
                break;
            }
        }
        if(flag) return count;
        count++;
        prev = [...current]
        // flag = true;
    }

    return count;
}
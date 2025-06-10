function solution(code) {
    let mode = false;
    let ret = "";

    [...code].forEach((str,index)=>{
        // mode 처리
        if(str === "1"){
            mode = !mode;
            return;
        }
        if(mode && isOdd(index)) {
            ret += str;
        } else if(!mode && !isOdd(index)) {
            ret += str;
        }
    })
    
    return ret || "EMPTY";
}

const isOdd = (num) => num % 2;
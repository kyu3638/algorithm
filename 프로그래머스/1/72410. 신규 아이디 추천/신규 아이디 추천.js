function solution(new_id) {
    // 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발
    // 아이디의 길이는 3자 이상 15자 이하여야 합니다.
    // 아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
    // 단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.
    var answer = '';
    new_id = new_id.split('')
    function toLowerLetter(arr){
        for(let i = 0; i < arr.length; i++){
            arr[i] = arr[i].toLowerCase();
        }
        return arr;
    }
    function eraser(arr){
        arr = arr.join('');
        const len = arr.length;
        for(let i = 0; i < len; i++){
            if(arr[i].toUpperCase() !== arr[i] || arr[i] / 1 === Number(arr[i]) || arr[i] === '-' || arr[i] === '_' || arr[i] === '.'){
                continue;
            } else {
                arr = arr.replace(arr[i]," ")
            }
        }
        arr = arr.replaceAll(" ","");
        return arr.split('');
    }
    function eraseDot(arr){
        let count = 0;
        let flag = false;
        while(!flag){
            count = 0;
            for(let i = 0; i < arr.length - 1; i++){
                if(arr[i] === '.' && arr[i+1] === '.'){
                    arr[i+1] = '';
                    count++;
                }
            }
            arr = arr.join('');
            arr = arr.split('')
            if(count === 0) break;
        }
        return arr;
    }
    function eraseDot2(arr){
        let count = 0;
        while(true){
            count = 0;
            if(arr[0] === '.'){
                arr[0] = '';
                count++;
            }
            if(arr[arr.length - 1] === '.'){
                arr[arr.length - 1] = '';
                count++;
            }
            arr = arr.join('');
            arr = arr.split('');
            if(count === 0) break;
        }
        return arr;
    }
    function cut(arr){
        if(arr.length > 15){
            arr.splice(15, arr.length - 15);
        }
        while(true){
            let count = 0;
            if(arr[arr.length - 1] === '.'){
                arr[arr.length - 1] = '';
                count++;
            }
            arr = arr.join('');
            arr = arr.split('');
            if(count === 0) break;
        }
        return arr;
    }
    function underLengthTwo(arr){
        while(true){
            if(arr.length < 3){
                arr.push(arr[arr.length - 1])
            }
            if(arr.length > 2) break;
        }
        return arr;
    }
    new_id = toLowerLetter(new_id);
    new_id = eraser(new_id);
    new_id = eraseDot(new_id);
    new_id = eraseDot2(new_id);
    if(new_id.length === 0) new_id.push('a')
    new_id = cut(new_id);
    new_id = underLengthTwo(new_id)
    answer = new_id.join('');
    return answer;
}
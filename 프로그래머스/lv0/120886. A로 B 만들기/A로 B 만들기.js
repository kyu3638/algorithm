function solution(before, after) {
    var answer = 0;
    before = before.split('');
    after = after.split('');
    for(let i = 0; i < before.length; i++){
        if(after.includes(before[i])){
            const index = after.indexOf(before[i]);
            after.splice(index,1);
            continue;
        }
    }
    if(after.length === 0){
        return 1;
    } else {
        return 0;
    }
}
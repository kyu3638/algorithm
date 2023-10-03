function solution(my_string) {
    let answer = ''
    const temp = my_string.split('');
    console.log(temp);
    for(let i = 0; i < temp.length; i++){
        temp[i] = temp[i].toLowerCase();
    }
    return temp.sort().join('')
}
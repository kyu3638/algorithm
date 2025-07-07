function solution(my_string, queries) {
    queries.forEach(([s,e]) => {
        my_string = reverseText(my_string, s, e);
    })
    
    return my_string;
}

const reverseText = (text, start, end) => {
    const numOfMove = end - start + 1;
    const arr = text.split('');
    
    for(let i = 0; i < Math.floor(numOfMove / 2); i++) {
        [arr[start + i], arr[end - i]] = [arr[end - i], arr[start + i]];
    }
    
    return arr.join('');
}
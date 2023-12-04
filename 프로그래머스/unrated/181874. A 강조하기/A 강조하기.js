function solution(myString) {
    myString = myString.split('');
    myString = myString.map(v=>{
        if(v==='a') return v.toUpperCase();
        else if(v === 'A') return v;
        else return v.toLowerCase();
    })
    return myString.join('')
}
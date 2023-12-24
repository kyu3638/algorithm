function solution(s) {
    var answer = '';
    const word = {zero:0,one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9}
    
    let index = 0;
    let temp = '';
    for(let i = 0; i < s.length; i++){
        temp += s[i];

        if(!isNaN(temp)) {
            answer+=String(temp);
            temp='';
        }
        
        if(word[temp] || word[temp] === 0) {
            answer+=word[temp];
            temp='';
        }
    }
    
    return Number(answer);
}
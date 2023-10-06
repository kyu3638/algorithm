function solution(letter) {
    const morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    
    var answer = '';
    letter = letter.split(' ');
    for(let i = 0; i < letter.length;i++){
        for(const [key,value] of Object.entries(morse)){
            if(letter[i] === key){
                answer += value;
                break;
            }
        }
    }
    return answer;
}
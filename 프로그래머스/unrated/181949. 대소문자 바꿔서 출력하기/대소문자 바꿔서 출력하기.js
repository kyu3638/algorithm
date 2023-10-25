const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0].split('');
    let answer = '';
    str.map((item)=>{
        if(item === item.toUpperCase()){
            answer += item.toLowerCase();
        } else {
            answer += item.toUpperCase();
        }
    })
    console.log(answer);
});
let [a,b,c] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number).sort((x,y)=> x-y);

if(a==b && b==c){
  console.log(10000 + a*1000)
} else if(a==b || b==c){
  console.log(1000 + b*100)
} else {
  console.log(c*100)
}
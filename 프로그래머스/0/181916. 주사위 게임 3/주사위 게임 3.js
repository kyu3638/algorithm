function solution(a, b, c, d) {
    const diceObj = {};
    [a,b,c,d].forEach(num => {
        if(!diceObj[num]) diceObj[num] = 0;
        diceObj[num] += 1;
    });
    
    const diceArr = Object.keys(diceObj).sort((a,b) => diceObj[b] - diceObj[a]);
    
    if (diceObj[diceArr[0]] === 4) return Number(diceArr[0]) * 1111;

    if (diceObj[diceArr[0]] === 3) return Math.pow(Number(diceArr[0]) * 10 + Number(diceArr[1]), 2);

    if (diceObj[diceArr[0]] === 2 && diceObj[diceArr[1]] === 2) return (Number(diceArr[0]) + Number(diceArr[1])) * Math.abs(Number(diceArr[0]) - Number(diceArr[1]));


    if (diceObj[diceArr[0]] === 2) return Number(diceArr[1]) * Number(diceArr[2]);
    
  return Number(diceArr[0]);
}
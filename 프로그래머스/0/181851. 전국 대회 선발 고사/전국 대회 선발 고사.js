function solution(rank, attendance) {
    const arr = []; // [studenNumber, rank]
    
    rank.forEach((r,index) => {
        if(!attendance[index]) return;
        
        arr.push([index,r]);
    })
    
    arr.sort((a,b)=>a[1]-b[1]).slice(0,3);
    
    return arr[0][0] * 10000 + arr[1][0] * 100 + arr[2][0];
}
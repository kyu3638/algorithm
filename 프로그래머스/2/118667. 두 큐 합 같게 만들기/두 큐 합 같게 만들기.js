function solution(queue1, queue2) {
    let q1Sum = queue1.reduce((acc,cur)=>acc + cur,0);
    let q2Sum = queue2.reduce((acc,cur)=>acc + cur,0);
    let qLen = queue1.length + queue2.length
    let idx1 = 0, idx2 = 0;
    let count = 0;
    while(count < qLen * 2){
        if(q1Sum > q2Sum){
            const item = queue1[idx1++]
            q1Sum -= item;
            q2Sum += item;
            queue2.push(item);
        } else if(q1Sum < q2Sum){
            const item = queue2[idx2++]
            q1Sum += item;
            q2Sum -= item;
            queue1.push(item);
        } else {
            return count
        }
        count++;
    }
    return -1;
}
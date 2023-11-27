function solution(sequence) {
    let answer = 0;
    const pSeq = [];
    const mSeq = [];
    pSeq.push(sequence[0]);
    mSeq.push(-sequence[0]);
    if(sequence.length === 1) return Math.max(sequence[0], -sequence[0])
    for(let i = 1; i < sequence.length; i++){
        if(i % 2 === 0){
            pSeq.push(Math.max(pSeq[i-1] + sequence[i], sequence[i]))
            mSeq.push(Math.max(mSeq[i-1] - sequence[i], -sequence[i]))
        } else if(i % 2 === 1){
            pSeq.push(Math.max(pSeq[i-1] - sequence[i], -sequence[i]))
            mSeq.push(Math.max(mSeq[i-1] + sequence[i], sequence[i]))
        }
        answer = Math.max(answer, pSeq[i], mSeq[i]);
    }
    return answer;
}
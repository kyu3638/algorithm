/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function(mat, k) {
    const arr = [...Array(mat[0].length+1)].map(()=>[]);

    for(let i = 0; i < mat.length; i++){
        let count = 0;
        for(let j = 0; j < mat[0].length; j++){
            if(mat[i][j] === 1) count++
        }
        arr[count].push(i)
    }

    const answer = [];
    for(let i = 0; i < arr.length; i++){
        if(answer.length === k) break;
        if(!arr[i].length) continue;
        while(answer.length < k && arr[i].length){
            answer.push(arr[i].shift())
        }
    }

    return answer;
};
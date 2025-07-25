function solution(arr1, arr2) {
    const answer = [];
    
    arr1.forEach((arr,i)=> {
        const temp = arr.map((num,j)=>{
            return num + arr2[i][j];
        });
        answer.push(temp);
    })
    
    return answer;
}
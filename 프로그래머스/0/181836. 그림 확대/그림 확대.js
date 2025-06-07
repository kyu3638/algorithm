function solution(picture, k) {
    const answer = [];
    
    for(let i = 0; i < picture.length; i++){
        // picture[i] 문자열을 k 배로 만든다.
        const row = picture[i];
        let newRow = "";
        for(const item of row){
            for(let i = 0; i < k; i++){
                newRow += item;
            }
        }
        
        // 해당 문자열을 k 개 answer에 삽입한다.
        for(let i = 0; i < k; i++){
            answer.push(newRow);
        }
    }
    
    return answer;
}
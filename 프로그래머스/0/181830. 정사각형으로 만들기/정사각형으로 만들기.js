function solution(arr) {    
    const rows = arr.length;
    const columns = arr[0].length;
    
    if(rows > columns){
        // 행이 더 많을 경우 -> 행과 길이를 맞춰 자리에 0을 추가
        const numToAdd = rows - columns;
        
        return arr.map(row => [...row, ...[...Array(numToAdd)].map(()=>0)]);
    } else if (rows < columns) {
        // 열이 더 많을 경우 -> 열과 길이를 맞춰 0인 행을 추가
        const numToAdd = columns - rows;
        
        return [...arr, ...Array.from({ length: numToAdd }, () => new Array(columns).fill(0))]
    } else {
        // 그대로 반환
        return arr;
    }
}
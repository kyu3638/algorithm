function solution(sizes) {
    // 가로와 세로의 길이를 담을 배열
    let width = [];
    let height = [];
    
    // 배열에 가로와 세로의 길이를 담아주고
    for(let i = 0; i < sizes.length; i++){
        width.push(sizes[i][0]);
        height.push(sizes[i][1]);
    }
    // 가로, 세로의 최대값을 구한다.
    let maxWidth = Math.max(...width);
    let maxHeight = Math.max(...height);
    
    // 세로의 길이가 더 긴 index의 가로와 세로를 뒤바꿔준다.
    for(let i = 0; i<sizes.length; i++){
        if(width[i] < height[i]){
            const a = width[i];
            const b = height[i];
            width[i] = b;
            height[i] = a;
        }
    }
    
    // 변경된 가로와 세로의 길이의 최대값의 곱이 최소직사각형의 크기를 가지는 지갑
    return Math.max(...width) * Math.max(...height);
}
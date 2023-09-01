function solution(sizes) {
    // var answer = 0;
    // return answer;
    let width = [];
    let height = [];
    
    for(let i = 0; i < sizes.length; i++){
        width.push(sizes[i][0]);
        height.push(sizes[i][1]);
    }
    // console.log(width);
    // console.log(height);
    let maxWidth = Math.max(...width);
    let maxHeight = Math.max(...height);
    // console.log(maxWidth, maxHeight)
    
    for(let i = 0; i<sizes.length; i++){
        if(width[i] < height[i]){
            const a = width[i];
            const b = height[i];
            width[i] = b;
            height[i] = a;
        }
    }
    // console.log(width);
    // console.log(height);
    return Math.max(...width) * Math.max(...height);
}
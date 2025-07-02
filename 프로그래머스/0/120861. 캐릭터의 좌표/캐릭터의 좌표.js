function solution(keyinput, board) {
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    
    const location = keyinput.reduce((result, input)=>{
        switch(input){
            case "up":
                return [result[0], Math.abs(result[1] + 1) <= maxY ? result[1] + 1 : result[1]];
            case "down":
                return [result[0], Math.abs(result[1] - 1) <= maxY ? result[1] - 1 : result[1]];
            case "right":
                return [Math.abs(result[0] + 1) <= maxX ? result[0] + 1 : result[0], result[1]];
            case "left":
                return [Math.abs(result[0] - 1) <= maxX ? result[0] - 1 : result[0], result[1]];
        }
    },[0,0]);
    
    return location;
}
function solution(park, routes) {
    var answer = [];
    
    const map = park.map(v=>v.split(''));
    
    // S(시작점)의 위치를 찾는 함수
    function searchStart(map, str){
        for(let i = 0; i < map.length; i++){
            for(let j = 0; j < map[0].length; j++){
                if(map[i][j] === str){
                    return [i, j]
                }
            }
        }
    }
    
    // 이동 명령을 수행하는 함수 - 맵, 현재 행, 현재 열, 방향(숫자로 받음), 거리를 인자로 받음
    function move(map, row, col, direction, distance, depth){
        if(depth === routes.length) answer = [row,col];
        const startRow = row;
        const startCol = col;
        const dr = [-1, 1, 0, 0];
        const dc = [0, 0, -1, 1];
        for(let i = 0; i < distance[depth]; i++){
            row = row + dr[direction[depth]];
            col = col + dc[direction[depth]];
            if(row >= 0 && row < map.length && col >= 0 && col < map[0].length){
                if(map[row][col] === 'O' || map[row][col] === 'S'){
                    if(i === distance[depth] - 1){
                        // 목적지까지 장애물 없이 까지 왔단 의미이므로, 현재의 row, col에서 출발하는 함수 재귀호출
                        return move(map, row, col, direction, distance, depth+1);
                    }
                    continue;
                } else if(map[row][col] === 'X'){
                    // 목적지 가는 길에 장애물 만났다는 의미이므로, 기존의 row, col에서 출발하는 함수 재귀호출
                    return move(map, startRow, startCol, direction, distance, depth+1);
                }
            } else {
                // 맵을 벗어난 경우이므로, 기존의 row, col에서 출발하는 함수 재귀호출
                return move(map, startRow, startCol, direction, distance, depth+1);
            }
        }
    }
    
    const direction = [];
    const distance = [];
    routes.map(v=>{
        let x = v.split(' ')
        direction.push(x[0]);
        distance.push(Number(x[1]))
    });
    for(let i = 0; i < direction.length; i++){
        if(direction[i] === 'N') direction[i] = 0;
        if(direction[i] === 'S') direction[i] = 1;
        if(direction[i] === 'W') direction[i] = 2;
        if(direction[i] === 'E') direction[i] = 3;
    }
    const start = searchStart(map,'S');
    const depth = 0;
    
    move(map, start[0], start[1], direction, distance, 0)
    
    return answer;
}
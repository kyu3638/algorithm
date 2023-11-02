function solution(wallpaper) {
    // 바탕화면 상태를 나타내는 문자열 배열 : wallpaper
    // 빈칸은 ".", 파일이 있는 칸은 "#"
    // 최소한의 이동거리를 갖는 한 번의 드래그로 모든 파일을 선택해서 한번에 지우려고 함
    // 점 S(lux, luy)에서 점 E(rdx, rdy)로 드래그를 할 때, "드래그 한 거리"는 |rdx - lux| + |rdy - luy|로 정의
    
    wallpaper = wallpaper.map(v=>v.split(''))
    // wallpaper를 순회하면서 최소 row를 갖는 lux, 최소 col를 갖는 luy
    // 최대 row를 갖는 rdx, 최대 col을 갖는 rdy를 찾아보자
    const row = [];
    const col = [];
    for(let i = 0; i < wallpaper.length; i++){
        for(let j = 0; j < wallpaper[0].length; j++){
            if(wallpaper[i][j] === '#'){
                row.push(i);
                col.push(j);
            }
        }
    }
    console.log(row);
    console.log(col);
    const [lux, luy, rdx, rdy] = [Math.min(...row), Math.min(...col), Math.max(...row)+1, Math.max(...col)+1]
    return [lux, luy, rdx, rdy]
}
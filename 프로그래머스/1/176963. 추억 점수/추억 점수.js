function solution(name, yearning, photo) {
    var answer = [];
    // name - 추억 점수가 있는 사람들의 문자열 배열
    // yearning - 그 사람들의 추억 점수
    // photo - 각 사진에 찍힌 인물들의 이름이 담긴 이차원 문자열 배열
    
    let nameAndYearning = [];
    for(let i = 0; i < name.length; i++){
        nameAndYearning.push([name[i],yearning[i]])
    }
    for(const pic of photo){
        let temp = 0;
        for(const name of nameAndYearning){
            for(const human of pic){
                if(name[0] === human){
                    temp+=name[1];
                }
            }
        }
        answer.push(temp);
    }
    console.log(answer);
    return answer;
}
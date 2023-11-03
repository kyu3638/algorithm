function solution(survey, choices) {
    // 카카오 성격 유형 검사지 제작
    // 성격 유형 검사는 4개 지표로 성격 유형을 구분, 성격은 각 지표에서 두 유형 중 하나로 결정(MBTI와 비슷)
    // n개의 질문 있고, 각 질문에는 7개의 선택지(매우 비동의 ~ 매우 동의)
    // 매우 동의, 매우 비동의 - 3점 // 동의, 비동의 - 2점 // 약간 동의, 약간 비동의 - 1점 // 모르겠음 - 0점
    // 검사 결과는 모든 질문의 성격 유형 점수를 더하여 각 지표에서 더 높은 점수를 받은 성격 유형이 검사자의 성격 유형이라고 판단
    // 단, 하나의 지표에서 각 성격 유형 점수가 같으면, 두 성격 유형 중 사전 순으로 빠른 성격 유형을 검사자의 성격 유형이라고 판단
    const scores = [['R', 0], ['T', 0], ['C', 0], ['F', 0], ['J', 0], ['M', 0], ['A', 0], ['N', 0]];
    // a,b와 choices[i]를 받아 해당 유형에 점수를 부여하는 함수
    function typeScore(a, b, choice){
        switch(choice){
            case 1:
                for(let i = 0; i < scores.length; i++){
                    if(scores[i][0] === a) scores[i][1] += 3;
                }
                break;
            case 2:
                for(let i = 0; i < scores.length; i++){
                    if(scores[i][0] === a) scores[i][1] += 2;
                }
                break;
            case 3:
                for(let i = 0; i < scores.length; i++){
                    if(scores[i][0] === a) scores[i][1] += 1;
                }
                break;
            case 4:
                break;
            case 5:
                for(let i = 0; i < scores.length; i++){
                    if(scores[i][0] === b) scores[i][1] += 1;
                }
                break;
            case 6:
                for(let i = 0; i < scores.length; i++){
                    if(scores[i][0] === b) scores[i][1] += 2;
                }
                break;
            case 7:
                for(let i = 0; i < scores.length; i++){
                    if(scores[i][0] === b) scores[i][1] += 3;
                }
                break;
        }
    }
    
    // 각 원소의 첫번째 문자는 해당 질문의 비동의 관련 선택지
    // 각 원소의 두번째 문자는 해당 질문의 동의 관련 선택지
    for(let i = 0; i < survey.length; i++){
        const [a, b] = survey[i].split('')
        // a,b와 choices[i]를 받아 해당 유형에 점수를 부여하는 함수
        typeScore(a,b,choices[i]);
    }
    let answer = '';
    if(scores[0][1] >= scores[1][1]) answer += scores[0][0];
    else answer+= scores[1][0];
    if(scores[2][1] >= scores[3][1]) answer += scores[2][0];
    else answer+= scores[3][0];
    if(scores[4][1] >= scores[5][1]) answer += scores[4][0];
    else answer+= scores[5][0];
    if(scores[6][1] >= scores[7][1]) answer += scores[6][0];
    else answer+= scores[7][0];

    
    
    return answer
    
}
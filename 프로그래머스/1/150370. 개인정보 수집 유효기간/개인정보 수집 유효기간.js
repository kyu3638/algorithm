function solution(today, terms, privacies) {
    var answer = [];
    // today - 오늘 날짜,  "2022.05.19"
    
    // terms - 약관의 유효기간을 담은 1차원 문자열 배열, ["A 6", "B 12", "C 3"]
    
    // privacies - 수집된 개인정보의 정보를 담은 1차원 문자열 배열
    // ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
    
    // 목표 : 파기해야할 개인정보의 번호를 오름차순으로 1차원 정수 배열에 담아 return 하도록 solution 함수 구현

    // 날짜를 계산하는 메소드가 있으면 좋겠는데 알고 있는게 없으므로 연도, 월, 일을 배열로 구분하여 문제를 해결해보자
    
    // 연도, 월, 일로 구분된 오늘 날짜 - [YYYY,MM,DD]의 형태
    today = today.split('.').map(v=>Number(v));
    
    // 약관 종류별 기간 구분 - [[약관, 기간],[약관, 기간],[약관, 기간]] 의 형태
    const termsAndPeriods = [];
    for(let i = 0; i < terms.length; i++){
        termsAndPeriods.push(terms[i].split(' '));
        termsAndPeriods[i][1] = Number(termsAndPeriods[i][1])
    }
    
    // 개인정보는 [[약관종류, YYYY, MM ,DD],[약관종류, YYYY, MM ,DD],[약관종류, YYYY, MM ,DD],..]으로 만들고자 함
    const len = privacies.length;
    const infos = [...Array(len)].map(()=>[]);
    for(let i = 0; i < len; i++){
        const temp = privacies.shift().split(' ');
        infos[i].push(temp[1]);
        infos[i].push(...temp[0].split('.').map(v=>Number(v)))
    }
    
    // 그럼 이제 수집된 개인정보들의 약관 종류에 따라 해당 약관의 유효기간을 넘지는 않았는지 체크해야 한다.
    // 1) infos의 각 원소가 termsAndPeriods를 돌면서 해당하는 약관 종류를 찾고,
    // 2) 기간을 넘었는지 체크해야한다.
    for(const info of infos){
        for(const term of termsAndPeriods){
            // 만약 일치하는 약관을 찾았으면
            if(info[0] === term[0]){
                // 기간을 넘었는지 체크
                // 오늘 날짜와 개인정보 수집날짜를 빼서 00년 00월 00일 만큼의 차이가 나는 것을 구하고, term[1]과 비교
                const diffYear = today[0] - info[1];
                const diffMonth = diffYear * 12 + today[1] - info[2];
                const diffDay = diffMonth * 28 + today[2] - info[3];
                // 날짜 차이를 일로 변환해서 28로 나눠서 차이나는 개월 수만 구함
                const passedMonth = Math.floor(diffDay / 28);
                // 약관별 보유 기간보다 그게 크다면
                if (passedMonth >= term[1]){
                    answer.push(infos.indexOf(info) + 1);
                }
            }
        }
    }
    return answer;
}
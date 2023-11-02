function solution(id_pw, db) {
    // 머쓱이가 입력한 아이디와 패스워드 : id_pw
    // 회원ㄴ들의 정보가 담긴 2차원 배열 : db
    for(const user of db){
        if(user[0] === id_pw[0]){
            if(user[1] === id_pw[1]){
                return "login";
            } else {
                return "wrong pw";
            }
        }
    }
    return "fail";
}
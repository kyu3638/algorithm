function solution(id_list, report, k) {

    var answer = [];

    report = new Set(report);
    report = [...report]
    const keyReporter = {};
    const keyReported = {}
    const userReportedCount = {};
    
    for(let i = 0; i < id_list.length; i++){
        keyReporter[id_list[i]] = [];
        keyReported[id_list[i]] = 0;
        userReportedCount[id_list[i]] = 0;
    }
    
    report.forEach(v=>{
        v = v.split(' ')

        keyReporter[v[0]].push(v[1])
        keyReported[v[1]] += 1;
    })
    
    const suspendedUsers = [];
    for(let i = 0; i <id_list.length; i++){
        if(keyReported[id_list[i]] >= k){
            suspendedUsers.push(id_list[i])
        }
    }
    
    for(let i = 0; i < id_list.length; i++){
        let count = 0;
        for(let j = 0; j < suspendedUsers.length; j++){
            if(keyReporter[id_list[i]].includes(suspendedUsers[j])){
                count++
            }
        }
        userReportedCount[id_list[i]] += count
    }

    answer = Object.values(userReportedCount);
    return answer;
}
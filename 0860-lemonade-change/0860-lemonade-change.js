/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const count = {}
    let answer = true;

    for(let bill of bills) {
        // $5 가져왔을 때
        // count[5]추가
        if(bill === 5) {
            count[5] = (count[5] || 0) + 1;
        } else if(bill === 10) {
            // $10 가져왔을 때
            count[10] = (count[10] || 0) + 1;
            if(count[5] > 0) count[5]--;
            else return false;
        } else {
            // $20 가져왔을 때
            count[20] = (count[20] || 0) + 1;
            if(count[5] > 0 && count[10] > 0){
                count[10]--;
                count[5]--;
            } else if(count[5] >= 3){
                count[5] = count[5] - 3;
            } else {
                return false;
            }
        }
    }

    console.log(count);
    return answer;
};
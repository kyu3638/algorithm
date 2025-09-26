/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    const aLen = a.length;
    const bLen = b.length;

    if (aLen > bLen) b = "0".repeat(aLen - bLen) + b;
    else a = "0".repeat(bLen - aLen) + a;

    let carry = 0;
    let answer = "";

    for (let i = a.length - 1; i >= 0; i--) {
        const sum = Number(a[i]) + Number(b[i]) + carry;
        answer = (sum % 2) + answer;
        carry = Math.floor(sum / 2);
    }

    if (carry > 0) {
        answer = carry + answer;
    }

    return answer;
};
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];

    for(let str of strs) {
        // === 0일 때가 prefix인 것, !== 0 일땐 prefix아니므로 하나 줄여서 다시 체크
        while(str.indexOf(prefix) !== 0) {
             prefix = prefix.substring(0, prefix.length - 1);
             if(!prefix.length) return "";
        }
    }

    return prefix;
};
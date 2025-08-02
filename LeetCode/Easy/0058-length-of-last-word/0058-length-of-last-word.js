/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    console.log(s.trim().split(" "))
    // return s.trim().split(" ")[s.length - 1].length;
    const arr = s.trim().split(" ");
    return arr[arr.length - 1].length;
};
function solution(myString, pat) {
    const lastPat = myString.lastIndexOf(pat);
    
    return myString.slice(0, lastPat + pat.length);
}
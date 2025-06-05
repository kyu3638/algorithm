function solution(myString, pat) {
    return myString.split("").map(l => l === "A" ? "B" : "A").join("").includes(pat) ? 1 : 0;
}
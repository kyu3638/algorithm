function solution(polynomial) {
    const terms = polynomial.split(" + ");
    
    const result = terms.reduce((acc,term)=>{
        if(term.endsWith("x")){
            return {
                ...acc,
                x : acc.x + Number(term.replace("x","") || "1")
            }
        } else {
            return {
                ...acc,
                num: acc.num + Number(term)
            }
        }
    },{ x:0, num:0 })
    
    return (result.x ? ((result.x === 1 ? "" : result.x) + "x") : "") + (result.num ? ((result.x ? " + " : "") + String(result.num)) : "");
}
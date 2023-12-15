function solution(k, tangerine) {

    const a = new Object();
    for(let i = 0; i < tangerine.length; i++){
        if(!a[tangerine[i]]) a[tangerine[i]] = 0;
        a[tangerine[i]]++;
    }
    
    const arr = Object.values(a).sort((a,b)=>b-a);
    for(let i = 0; i < arr.length; i++){
        k -= arr[i]
        if(k <= 0) return i + 1;
    }
}
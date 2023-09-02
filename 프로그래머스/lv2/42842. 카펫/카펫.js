function solution(brown, yellow) {
    for(let i = (brown+yellow); i > 0; i--){
        if((brown+yellow) % i === 0){
            const j = (brown+yellow) / i;
            if((i - 2) * (j - 2) === yellow ) {
                return [i, j]
            }
        }
    }
}
// function solution(players, callings) {
//     for(let i = 0; i < callings.length; i++){
//         for(let j = 0; j < players.length; j++){
//             if(callings[i] === players[j]){
//                 [players[j], players[j-1]] = [players[j-1], players[j]];
//             }
//         }
//     }
//     return players;
// }

function solution(players, callings){
    const keyPlayers = {};
    const keyRanks = {};
    players.forEach((player, idx)=>{
        const rank = idx + 1;
        keyPlayers[player] = rank;
        keyRanks[rank] = player;
    })
    console.log(keyPlayers);
    console.log(keyRanks)
    
    callings.forEach((calling)=>{
        const winnerIdx = keyPlayers[calling];
        const winner = keyRanks[winnerIdx]
        const loserIdx = winnerIdx - 1;
        const loser = keyRanks[loserIdx];
        
        keyPlayers[loser] += 1;
        keyPlayers[winner] -= 1;
        keyRanks[loserIdx] = winner;
        keyRanks[winnerIdx] = loser;
    })
    return Object.values(keyRanks)
}
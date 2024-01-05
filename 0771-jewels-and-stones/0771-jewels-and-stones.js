/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let numJewelsInStone = 0
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      numJewelsInStone++
    }
  }
  return numJewelsInStone
};
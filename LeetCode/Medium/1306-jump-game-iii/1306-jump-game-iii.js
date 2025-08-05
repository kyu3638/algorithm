/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    const visited = Array.from({length:arr.length}, () => false);

    const dfs = (index) => {
        if(index < 0 || index >= arr.length) return false;
        if(visited[index]) return false;

        if(arr[index] === 0) return true;

        visited[index] = true;

        return dfs(index + arr[index]) || dfs(index - arr[index]);
    };

    return dfs(start);
};
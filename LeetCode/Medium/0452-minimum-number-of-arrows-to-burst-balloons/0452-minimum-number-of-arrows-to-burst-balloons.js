/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b) => a[1] - b[1]);

    let currentTarget = 0;
    let count = 0;

    for(let i = 0; i < points.length; i++) {
        if(i === 0) {
            currentTarget = points[i][1];
            count++;
        }

        if(currentTarget >= points[i][0] && currentTarget <= points[i][1]) {
            continue;
        } else {
            currentTarget = points[i][1];
            count++
        }
    }

    return count;
};
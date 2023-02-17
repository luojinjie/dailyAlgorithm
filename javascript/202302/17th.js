"use strict";
/**
 * 1139. 最大的以 1 为边界的正方形
 * 给你一个由若干 0 和 1 组成的二维网格 grid，请你找出边界全部由 1 组成的最大 正方形 子网格，并返回该子网格中的元素数量。如果不存在，则返回 0。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/largest-1-bordered-square/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function largest1BorderedSquare(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let prevRow = new Array(m).fill(0).map(() => new Array(n + 1).fill(0)); // 每行前缀和(m行,n+1列)
    let prevCol = new Array(n).fill(0).map(() => new Array(m + 1).fill(0)); // 每列前缀和(n列,m+1行)
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (grid[row][col] == 0) {
                continue;
            }
            // N:注意下标对应
            prevRow[row][col + 1] = prevRow[row][col] + 1;
            prevCol[col][row + 1] = prevCol[col][row] + 1;
        }
    }
    // 从最大边长开始判断
    for (let dis = Math.min(m, n); dis > 0; dis--) {
        for (let row = 0; row <= m - dis; row++) {
            for (let col = 0; col <= n - dis; col++) {
                if (prevRow[row][col + dis] - prevRow[row][col] == dis && // 上边
                    prevRow[row + dis - 1][col + dis] - prevRow[row + dis - 1][col] == dis && // 下边
                    prevCol[col][row + dis] - prevCol[col][row] == dis && // 左边
                    prevCol[col + dis - 1][row + dis] - prevCol[col + dis - 1][row] == dis) { // 右边
                    return dis * dis;
                }
            }
        }
    }
    return 0;
}
;
console.log(largest1BorderedSquare([[1, 1, 1], [1, 0, 1], [1, 1, 1]]));
//# sourceMappingURL=17th.js.map
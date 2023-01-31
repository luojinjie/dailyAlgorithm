"use strict";
/**
 * 2319. 判断矩阵是否是一个 X 矩阵
 * 如果一个正方形矩阵满足下述 全部 条件，则称之为一个 X 矩阵 ：
 * 矩阵对角线上的所有元素都 不是 0
 * 矩阵中所有其他元素都是 0
 * 给你一个大小为 n x n 的二维整数数组 grid ，表示一个正方形矩阵。如果 grid 是一个 X 矩阵 ，返回 true ；否则，返回 false 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/check-if-matrix-is-x-matrix/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function checkXMatrix(grid) {
    let n = grid.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // 对角线的位置(除了中心,都是两两对应)
            if (j == i || j == n - i - 1) {
                if (grid[i][j] == 0) {
                    return false;
                }
            }
            else {
                if (grid[i][j] != 0) {
                    return false;
                }
            }
        }
    }
    return true;
}
;
console.log(checkXMatrix([[2, 0, 0, 1], [0, 3, 1, 0], [0, 5, 2, 0], [4, 0, 0, 2]]));
//# sourceMappingURL=31st.js.map
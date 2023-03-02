/**
 * 2373. 矩阵中的局部最大值
 * 给你一个大小为 n x n 的整数矩阵 grid 。生成一个大小为 (n - 2) x (n - 2) 的整数矩阵  maxLocal ，并满足：
 * maxLocal[i][j] 等于 grid 中以 i + 1 行和 j + 1 列为中心的 3 x 3 矩阵中的 最大值 。
 * 换句话说，我们希望找出 grid 中每个 3 x 3 矩阵中的最大值。
 * 返回生成的矩阵。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/largest-local-values-in-a-matrix/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function largestLocal(grid: number[][]): number[][] {
    let n = grid.length;
    let res = new Array(n - 2).fill(0).map(() => new Array(n - 2).fill(0));
    for (let i = 0; i < n - 2; i++) {
        for (let j = 0; j < n - 2; j++) {
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    res[i][j] = Math.max(res[i][j], grid[k][l]);
                }
            }
        }
    }

    return res;
};

console.log(largestLocal([[9, 9, 8, 1], [5, 6, 2, 6], [8, 2, 6, 4], [6, 2, 2, 2]]))
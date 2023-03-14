/**
 * 1605. 给定行和列的和求可行矩阵
 * 给你两个非负整数数组 rowSum 和 colSum ，其中 rowSum[i] 是二维矩阵中第 i 行元素的和， colSum[j] 是第 j 列元素的和。换言之你不知道矩阵里的每个元素，但是你知道每一行和每一列的和。
 * 请找到大小为 rowSum.length x colSum.length 的任意 非负整数 矩阵，且该矩阵满足 rowSum 和 colSum 的要求。
 * 请你返回任意一个满足题目要求的二维矩阵，题目保证存在 至少一个 可行矩阵。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/find-valid-matrix-given-row-and-column-sums/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function restoreMatrix(rowSum: number[], colSum: number[]): number[][] {
    let n = rowSum.length;
    let m = colSum.length;
    let matrix = new Array(n).fill(0).map(() => new Array(m).fill(0));
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            // 每次取可取到最大的数放入矩阵(贪心)
            matrix[row][col] = Math.min(rowSum[row], colSum[col]);
            rowSum[row] -= matrix[row][col];
            colSum[col] -= matrix[row][col];
        }
    }

    return matrix;
};

console.log(restoreMatrix([5, 7, 10], [8, 6, 8]))
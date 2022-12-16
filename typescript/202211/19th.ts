/**
 * 1732. 找到最高海拔
 * 有一个自行车手打算进行一场公路骑行，这条路线总共由 n + 1 个不同海拔的点组成。自行车手从海拔为 0 的点 0 开始骑行。
 * 给你一个长度为 n 的整数数组 gain ，其中 gain[i] 是点 i 和点 i + 1 的 净海拔高度差（0 <= i < n）。请你返回 最高点的海拔 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/find-the-highest-altitude/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function largestAltitude(gain: number[]): number {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < gain.length; i++) {
        sum += gain[i];
        max = Math.max(max, sum);
    }

    return max;
};

console.log(largestAltitude([-4, -3, -2, -1, 4, 3, 2]));
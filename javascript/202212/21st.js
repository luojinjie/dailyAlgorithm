"use strict";
/**
 * 1753. 移除石子的最大得分
 * 你正在玩一个单人游戏，面前放置着大小分别为 a​​​​​​、b 和 c​​​​​​ 的 三堆 石子。
 * 每回合你都要从两个 不同的非空堆 中取出一颗石子，并在得分上加 1 分。当存在 两个或更多 的空堆时，游戏停止。
 * 给你三个整数 a 、b 和 c ，返回可以得到的 最大分数 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/maximum-score-from-removing-stones/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function maximumScore(a, b, c) {
    let sum = a + b + c;
    let arr = [a, b, c];
    arr.sort((x, y) => x - y);
    // 设a,b为较小的2个数,c为最大的数
    // 情况1:a + b ≤ c, a、b各自与c抵消为0就是最大分数
    if (arr[0] + arr[1] <= arr[2]) {
        return arr[0] + arr[1];
    }
    // 情况2:a + b > c, a、b每次取较大的值与c抵消,直到c为0, 再加上a、b之间较小的值就是最大分数
    // 设a与c抵消i次, b与c抵消j次, a和b此时只可能是相等或者相差1, i + j + ((a - i) + (b - j)) / 2 = (a + b + c) / 2 
    return Math.floor(sum / 2);
}
;
console.log(maximumScore(4, 4, 6));
//# sourceMappingURL=21st.js.map
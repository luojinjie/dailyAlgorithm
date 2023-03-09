"use strict";
/**
 * 2379. 得到 K 个黑块的最少涂色次数
 * 给你一个长度为 n 下标从 0 开始的字符串 blocks ，blocks[i] 要么是 'W' 要么是 'B' ，表示第 i 块的颜色。字符 'W' 和 'B' 分别表示白色和黑色。
 * 给你一个整数 k ，表示想要 连续 黑色块的数目。
 * 每一次操作中，你可以选择一个白色块将它 涂成 黑色块。
 * 请你返回至少出现 一次 连续 k 个黑色块的 最少 操作次数。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function minimumRecolors(blocks, k) {
    let n = blocks.length;
    let arr = new Array(n + 1).fill(0);
    // 记录对应索引前出现的白色块数量
    for (let i = 0; i < n; i++) {
        arr[i + 1] = arr[i] + (blocks[i] == "W" ? 1 : 0);
    }
    let min = k;
    // 遍历区间内存在的白色块数量
    for (let i = k; i <= n; i++) {
        min = Math.min(min, arr[i] - arr[i - k]);
    }
    return min;
}
;
console.log(minimumRecolors("WBBWWBBWBW", 7));
//# sourceMappingURL=9th.js.map
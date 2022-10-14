"use strict";
/**
 * 769. 最多能完成排序的块
 * 给定一个长度为 n 的整数数组 arr ，它表示在 [0, n - 1] 范围内的整数的排列。
 * 我们将 arr 分割成若干 块 (即分区)，并对每个块单独排序。将它们连接起来后，使得连接的结果和按升序排序后的原数组相同。
 * 返回数组能分成的最多块数量。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/max-chunks-to-make-sorted
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function maxChunksToSorted(arr) {
    let max = -1;
    let cnt = 0;
    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        // 根据题意得知排序后arr[i] = i,因此当前最大值等于i时,i前面的值排序必定是升序
        if (max == i) {
            cnt++;
        }
    }
    return cnt;
}
;
console.log(maxChunksToSorted([1, 0, 2, 3, 4]));
//# sourceMappingURL=13th.js.map
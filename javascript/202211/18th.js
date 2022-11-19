"use strict";
/**
 * 891. 子序列宽度之和
 * 一个序列的 宽度 定义为该序列中最大元素和最小元素的差值。
 * 给你一个整数数组 nums ，返回 nums 的所有非空 子序列 的 宽度之和 。由于答案可能非常大，请返回对 109 + 7 取余 后的结果。
 * 子序列 定义为从一个数组里删除一些（或者不删除）元素，但不改变剩下元素的顺序得到的数组。例如，[3,6,2,7] 就是数组 [0,3,1,6,2,2,7] 的一个子序列。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/sum-of-subsequence-widths/description/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function sumSubseqWidths(nums) {
    // N:顺序不影响子序列宽度
    nums.sort((a, b) => a - b);
    let mod = 1e9 + 7;
    let n = nums.length;
    let sum = 0;
    let pow2 = new Array(n);
    pow2[0] = 1;
    for (var i = 1; i < n; i++) {
        pow2[i] = pow2[i - 1] * 2 % mod;
    }
    // N:以nums[i]为最小值有pow2[n - i - 1]个子序列,以nums[i]为最大值有pow2[i]个子序列
    for (var i = 0; i < n; i++) {
        sum = (sum + (pow2[i] - pow2[n - i - 1]) * nums[i]) % mod;
    }
    return (sum + mod) % mod;
}
;
// 857876214
console.log(sumSubseqWidths([2, 1, 3]));
//# sourceMappingURL=18th.js.map
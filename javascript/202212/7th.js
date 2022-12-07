"use strict";
/**
 * 1775. 通过最少操作次数使数组的和相等
 * 给你两个长度可能不等的整数数组 nums1 和 nums2 。两个数组中的所有值都在 1 到 6 之间（包含 1 和 6）。
 * 每次操作中，你可以选择 任意 数组中的任意一个整数，将它变成 1 到 6 之间 任意 的值（包含 1 和 6）。
 * 请你返回使 nums1 中所有数的和与 nums2 中所有数的和相等的最少操作次数。如果无法使两个数组的和相等，请返回 -1 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/equal-sum-arrays-with-minimum-number-of-operations/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function minOperations4(nums1, nums2) {
    let n = nums1.length;
    let m = nums2.length;
    if (n * 6 < m || m * 6 < n) {
        return -1;
    }
    // 计算差值
    let diff = 0;
    for (let i = 0; i < n; i++) {
        diff += nums1[i];
    }
    for (let i = 0; i < m; i++) {
        diff -= nums2[i];
    }
    if (diff == 0) {
        return 0;
    }
    let maxNums = nums1;
    let minNums = nums2;
    if (diff < 0) {
        diff = -diff;
        maxNums = nums2;
        minNums = nums1;
    }
    // 变化幅度(0-5)的个数
    let cnts = new Array(6).fill(0);
    // 较小数组整体换为6
    for (let i = 0; i < minNums.length; i++) {
        cnts[6 - minNums[i]]++;
    }
    // 较大数组整体变为1
    for (let i = 0; i < maxNums.length; i++) {
        cnts[Math.abs(1 - maxNums[i])]++;
    }
    let count = 0;
    for (let i = 5; diff > 0; i--) {
        while (cnts[i]) {
            cnts[i]--;
            count++;
            if (diff <= i) {
                return count;
            }
            diff -= i;
        }
    }
    return count;
}
;
console.log(minOperations4([1, 2, 3, 4, 5, 6], [1, 1, 2, 2, 2, 2]));
console.log(minOperations4([1, 1, 1, 1, 1, 1, 1], [6]));
console.log(minOperations4([6, 6], [1]));
//# sourceMappingURL=7th.js.map
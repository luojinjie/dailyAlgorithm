"use strict";
/**
 * 915. 分割数组
 * 给定一个数组 nums ，将其划分为两个连续子数组 left 和 right， 使得：
 * left 中的每个元素都小于或等于 right 中的每个元素。
 * left 和 right 都是非空的。
 * left 的长度要尽可能小。
 * 在完成这样的分组后返回 left 的 长度 。
 * 用例可以保证存在这样的划分方法。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/partition-array-into-disjoint-intervals
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function partitionDisjoint(nums) {
    // 从右往左构建分割点右侧所有值得最小值数组
    let minArr = new Array(nums.length).fill(0);
    let min = nums[nums.length - 1];
    minArr[nums.length - 1] = min;
    for (let i = nums.length - 2; i >= 0; i--) {
        min = Math.min(min, nums[i]);
        minArr[i] = min;
    }
    // 从左往右找出分割点,分割点左侧最大值≤右侧最小值
    let max = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        max = Math.max(max, nums[i]);
        if (max <= minArr[i + 1]) {
            return i + 1;
        }
    }
    return -1;
}
;
console.log(partitionDisjoint([5, 0, 3, 8, 6]));
//# sourceMappingURL=24th.js.map
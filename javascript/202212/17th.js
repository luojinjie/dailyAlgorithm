"use strict";
/**
 * 1764. 通过连接另一个数组的子数组得到一个数组
 * 给你一个长度为 n 的二维整数数组 groups ，同时给你一个整数数组 nums 。
 * 你是否可以从 nums 中选出 n 个 不相交 的子数组，使得第 i 个子数组与 groups[i] （下标从 0 开始）完全相同，且如果 i > 0 ，那么第 (i-1) 个子数组在 nums 中出现的位置在第 i 个子数组前面。（也就是说，这些子数组在 nums 中出现的顺序需要与 groups 顺序相同）
 * 如果你可以找出这样的 n 个子数组，请你返回 true ，否则返回 false 。
 * 如果不存在下标为 k 的元素 nums[k] 属于不止一个子数组，就称这些子数组是 不相交 的。子数组指的是原数组中连续元素组成的一个序列。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/form-array-by-concatenating-subarrays-of-another-array/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function canChoose(groups, nums) {
    let i = 0;
    for (let j = 0; j < nums.length && i < groups.length;) {
        if (doCheck(j, groups[i], nums)) {
            // 偏移值跳转
            j += groups[i].length;
            // 遍历下一个数组
            i++;
        }
        else {
            // 偏移值递增
            j++;
        }
    }
    return i == groups.length;
}
;
function doCheck(offset, group, nums) {
    // 长度不足
    if (offset + group.length > nums.length) {
        return false;
    }
    for (let i = 0; i < group.length; i++) {
        if (group[i] != nums[offset]) {
            return false;
        }
        offset++;
    }
    return true;
}
console.log(canChoose([[1, -1, -1], [3, -2, 0]], [1, -1, 0, 1, -1, -1, 3, -2, 0]));
//# sourceMappingURL=17th.js.map
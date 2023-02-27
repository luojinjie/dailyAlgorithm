"use strict";
/**
 * 1144. 递减元素使数组呈锯齿状
 * 给你一个整数数组 nums，每次 操作 会从中选择一个元素并 将该元素的值减少 1。
 * 如果符合下列情况之一，则数组 A 就是 锯齿数组：
 * 每个偶数索引对应的元素都大于相邻的元素，即 A[0] > A[1] < A[2] > A[3] < A[4] > ...
 * 或者，每个奇数索引对应的元素都大于相邻的元素，即 A[0] < A[1] > A[2] < A[3] > A[4] < ...
 * 返回将数组 nums 转换为锯齿数组所需的最小操作次数。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/decrease-elements-to-make-array-zigzag/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function movesToMakeZigzag(nums) {
    let n = nums.length;
    let odd = 0;
    let even = 0;
    for (let i = 0; i < n; i++) {
        let left = Number.MAX_VALUE;
        let right = Number.MAX_VALUE;
        if (i > 0) {
            left = nums[i - 1];
        }
        if (i < n - 1) {
            right = nums[i + 1];
        }
        if (i % 2 == 0) {
            even += Math.max(nums[i] - Math.min(left, right) + 1, 0);
        }
        else {
            odd += Math.max(nums[i] - Math.min(left, right) + 1, 0);
        }
    }
    return Math.min(odd, even);
}
;
console.log(movesToMakeZigzag([1, 2, 3]));
//# sourceMappingURL=27th.js.map
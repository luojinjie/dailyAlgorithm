"use strict";
/**
 * 2389. 和有限的最长子序列
 * 给你一个长度为 n 的整数数组 nums ，和一个长度为 m 的整数数组 queries 。
 * 返回一个长度为 m 的数组 answer ，其中 answer[i] 是 nums 中 元素之和小于等于 queries[i] 的 子序列 的 最大 长度  。
 * 子序列 是由一个数组删除某些元素（也可以不删除）但不改变剩余元素顺序得到的一个数组。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/longest-subsequence-with-limited-sum/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function answerQueries(nums, queries) {
    // 排序
    nums.sort((a, b) => a - b);
    let n = nums.length;
    let m = queries.length;
    // 前缀和
    let sum = new Array(n).fill(0);
    sum[0] = nums[0];
    for (let i = 1; i < n; i++) {
        sum[i] = sum[i - 1] + nums[i];
    }
    // 二分查找
    let res = new Array(m).fill(0);
    for (let i = 0; i < m; i++) {
        res[i] = binarySearch2(sum, queries[i]);
    }
    return res;
}
;
// 二分查找
function binarySearch2(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let middle = left + Math.floor((right - left) / 2);
        if (nums[middle] > target) {
            right = middle;
        }
        else {
            left = middle + 1;
        }
    }
    return left;
}
console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]));
//# sourceMappingURL=17th.js.map
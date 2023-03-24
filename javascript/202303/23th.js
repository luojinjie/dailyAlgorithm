"use strict";
/**
 * 1630. 等差子数组
 * 如果一个数列由至少两个元素组成，且每两个连续元素之间的差值都相同，那么这个序列就是 等差数列 。更正式地，数列 s 是等差数列，只需要满足：对于每个有效的 i ， s[i+1] - s[i] == s[1] - s[0] 都成立。
 * 给你一个由 n 个整数组成的数组 nums，和两个由 m 个整数组成的数组 l 和 r，后两个数组表示 m 组范围查询，其中第 i 个查询对应范围 [l[i], r[i]] 。所有数组的下标都是 从 0 开始 的。
 * 返回 boolean 元素构成的答案列表 answer 。如果子数组 nums[l[i]], nums[l[i]+1], ... , nums[r[i]] 可以 重新排列 形成 等差数列 ，answer[i] 的值就是 true；否则answer[i] 的值就是 false 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/arithmetic-subarrays/description/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function checkArithmeticSubarrays(nums, l, r) {
    let n = l.length;
    let ans = new Array(n).fill(false);
    for (let i = 0; i < n; i++) {
        // 取出范围内最小和最大值
        let min = Number.MAX_VALUE;
        let max = -Number.MAX_VALUE;
        for (let j = l[i]; j <= r[i]; j++) {
            min = Math.min(min, nums[j]);
            max = Math.max(max, nums[j]);
        }
        if (min == max) {
            ans[i] = true;
            continue;
        }
        // 公差
        let step = (max - min) / (r[i] - l[i]);
        if (i == 5) {
            console.log(max, min, step);
        }
        let map = new Map();
        let flag = true;
        for (let j = l[i]; j <= r[i]; j++) {
            if ((nums[j] - min) % step != 0) {
                flag = false;
                break;
            }
            // 公差不为0,不允许出现相同数字
            if (map.has(nums[j])) {
                flag = false;
                break;
            }
            map.set(nums[j], 1);
        }
        ans[i] = flag;
    }
    return ans;
}
;
console.log(checkArithmeticSubarrays([4, 6, 5, 9, 3, 7], [0, 0, 2], [2, 3, 5]));
console.log(checkArithmeticSubarrays([-12, -9, -3, -12, -6, 15, 20, -25, -20, -15, -10], [0, 1, 6, 4, 8, 7], [4, 4, 9, 7, 9, 10]));
console.log(checkArithmeticSubarrays([1, 2, 10, -6, -7, 8, 16, 0, 0, 10, 20, 15, -2, -3, -1, -4, -4, -8, -2], [14, 5, 11, 15, 12, 13, 9, 7, 0], [15, 8, 14, 18, 15, 16, 12, 8, 1]));
//# sourceMappingURL=23th.js.map
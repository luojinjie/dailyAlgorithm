"use strict";
/**
 * 2488. 统计中位数为 K 的子数组
 * 给你一个长度为 n 的数组 nums ，该数组由从 1 到 n 的 不同 整数组成。另给你一个正整数 k 。
 * 统计并返回 nums 中的 中位数 等于 k 的非空子数组的数目。
 * 注意：
 * 数组的中位数是按 递增 顺序排列后位于 中间 的那个元素，如果数组长度为偶数，则中位数是位于中间靠 左 的那个元素。
 * 例如，[2,3,1,4] 的中位数是 2 ，[8,4,3,5,1] 的中位数是 4 。
 * 子数组是数组中的一个连续部分。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/count-subarrays-with-median-k/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function countSubarrays(nums, k) {
    let sum = 0;
    let count = 0;
    let behind = false;
    let map = new Map();
    map.set(0, 1); // 空前缀
    for (let num of nums) {
        // 前缀和
        sum += numSwitch(num - k);
        // 标记当前位置 ≥ 中位数的位置
        if (num === k) {
            behind = true;
        }
        if (behind) {
            // 子数组为奇数和偶数的个数相加得到总数
            count += (map.get(sum) || 0) + ((map.get(sum - 1) || 0));
        }
        else {
            // 记录前缀和个数
            map.set(sum, (map.get(sum) || 0) + 1);
        }
    }
    return count;
}
;
// 数值转换
function numSwitch(num) {
    if (num == 0) {
        return 0;
    }
    return num > 0 ? 1 : -1;
}
console.log(countSubarrays([4, 1, 3, 2], 1));
//# sourceMappingURL=16th.js.map
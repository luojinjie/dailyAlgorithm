"use strict";
/**
 * 2367. 算术三元组的数目
 * 给你一个下标从 0 开始、严格递增 的整数数组 nums 和一个正整数 diff 。如果满足下述全部条件，则三元组 (i, j, k) 就是一个 算术三元组 ：
 * i < j < k ，
 * nums[j] - nums[i] == diff 且
 * nums[k] - nums[j] == diff
 * 返回不同 算术三元组 的数目。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/number-of-arithmetic-triplets/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function arithmeticTriplets(nums, diff) {
    let map = new Map();
    for (let num of nums) {
        map.set(num, true);
    }
    let count = 0;
    for (let num of nums) {
        if (map.has(num + diff) && map.has(num + diff * 2)) {
            count++;
        }
    }
    return count;
}
;
console.log(arithmeticTriplets([4, 5, 6, 7, 8, 9, 10], 2));
//# sourceMappingURL=31st.js.map
"use strict";
/**
 * 2032. 至少在两个数组中出现的值
 * 给你三个整数数组 nums1、nums2 和 nums3 ，请你构造并返回一个 元素各不相同的 数组，且由 至少 在 两个 数组中出现的所有值组成。数组中的元素可以按 任意 顺序排列。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/two-out-of-three/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function twoOutOfThree(nums1, nums2, nums3) {
    let map = new Map();
    for (let num of nums1) { // 001
        map.set(num, 1);
    }
    for (let num of nums2) { // 010
        map.set(num, (map.get(num) || 0) | 2);
    }
    for (let num of nums3) { // 100
        map.set(num, (map.get(num) || 0) | 4);
    }
    let res = [];
    for (let items of map.entries()) {
        // N:如果同时存在2个或以上的数组中,二进制位至少2个1,减1求与必定大于0
        if ((items[1] & (items[1] - 1)) != 0) {
            res.push(items[0]);
        }
    }
    return res;
}
;
console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]));
//# sourceMappingURL=29th.js.map
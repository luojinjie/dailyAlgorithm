"use strict";
/**
 * 1250. 检查「好数组」
 * 给你一个正整数数组 nums，你需要从中任选一些子集，然后将子集中每一个数乘以一个 任意整数，并求出他们的和。
 * 假如该和结果为 1，那么原数组就是一个「好数组」，则返回 True；否则请返回 False。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/check-if-it-is-a-good-array/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common/common");
function isGoodArray(nums) {
    // N:本题是裴蜀定理,最大公约数为1即可满足好数组的条件
    let divisor = nums[0];
    for (let num of nums) {
        divisor = (0, common_1.gcd)(divisor, num);
        if (divisor == 1) {
            return true;
        }
    }
    return false;
}
;
console.log(isGoodArray([12, 5, 7, 23]));
//# sourceMappingURL=15th.js.map
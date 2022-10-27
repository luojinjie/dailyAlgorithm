"use strict";
/**
 * 1822. 数组元素积的符号
 * 已知函数 signFunc(x) 将会根据 x 的正负返回特定值：
 * 如果 x 是正数，返回 1 。
 * 如果 x 是负数，返回 -1 。
 * 如果 x 是等于 0 ，返回 0 。
 * 给你一个整数数组 nums 。令 product 为数组 nums 中所有元素值的乘积。
 * 返回 signFunc(product) 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/sign-of-the-product-of-an-array
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function arraySign(nums) {
    let sign = 1;
    for (let num of nums) {
        if (num == 0) {
            return 0;
        }
        if (num < 0) {
            sign = -sign;
        }
    }
    return sign;
}
;
console.log(arraySign([-1, -2, -3, -4, 3, 2, 1]));
//# sourceMappingURL=27th.js.map
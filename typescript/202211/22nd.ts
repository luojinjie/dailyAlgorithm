/**
 * 878. 第 N 个神奇数字
 * 一个正整数如果能被 a 或 b 整除，那么它是神奇的。
 * 给定三个整数 n , a , b ，返回第 n 个神奇的数字。因为答案可能很大，所以返回答案 对 109 + 7 取模 后的值。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/nth-magical-number/solutions/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import { lcm } from "../common/common";

function nthMagicalNumber(n: number, a: number, b: number): number {
    let mod = 1e9 + 7;
    let left = Math.min(a, b); // 左边界
    let right = left * n; // 右边界
    let c = lcm(a, b); // 最小公倍数

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        // 小于等于middle的神奇数字个数
        // Math.floor(middle / a) 被a整除的个数
        // Math.floor(middle / b) 被b整除的个数
        // Math.floor(middle / c) 同时被a、b整除的个数
        let count = Math.floor(middle / a) + Math.floor(middle / b) - Math.floor(middle / c);
        if (count >= n) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return (right + 1) % mod;
};

console.log(nthMagicalNumber(4, 2, 3))
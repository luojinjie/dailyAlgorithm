"use strict";
/**
 * 1012. 至少有 1 位重复的数字
 * 给定正整数 n，返回在 [1, n] 范围内具有 至少 1 位 重复数字的正整数的个数。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/numbers-with-repeated-digits/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function numDupDigitsAtMostN(n) {
    let str = n.toString();
    let m = str.length;
    let dp = new Array(m).fill(0).map(() => new Array(1 << 10).fill(-1));
    // mask:掩码(每个数字是否出现过), i:第几位数字(从高位到低位), limit:是否受到约束
    let find = (mask, i, limit) => {
        // 遍历到底,得到1个有效数字
        if (i == m) {
            return 1;
        }
        if (!limit && dp[i][mask] >= 0) {
            return dp[i][mask];
        }
        let res = 0;
        let count = limit ? str.charCodeAt(i) - "0".charCodeAt(0) : 9;
        for (let j = 0; j <= count; j++) {
            // 数字已出现过
            if ((mask & (1 << j)) != 0) {
                continue;
            }
            let nextMask = mask == 0 && j == 0 ? mask : mask | (1 << j);
            res += find(nextMask, i + 1, limit && j == count);
        }
        return res;
    };
    return n - find(0, 0, true) + 1;
}
;
console.log(numDupDigitsAtMostN(20));
//# sourceMappingURL=20th.js.map
"use strict";
/**
 * 1758. 生成交替二进制字符串的最少操作数
 * 给你一个仅由字符 '0' 和 '1' 组成的字符串 s 。一步操作中，你可以将任一 '0' 变成 '1' ，或者将 '1' 变成 '0' 。
 * 交替字符串 定义为：如果字符串中不存在相邻两个字符相等的情况，那么该字符串就是交替字符串。例如，字符串 "010" 是交替字符串，而字符串 "0100" 不是。
 * 返回使 s 变成 交替字符串 所需的 最少 操作数。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/minimum-changes-to-make-alternating-binary-string/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function minOperations(s) {
    let count = 0;
    let prev = Number(s[0]);
    for (let i = 1; i < s.length; i++) {
        let num = Number(s[i]);
        if (prev == num) {
            count++;
            // 切换数值(0转1,1转0)
            prev ^= 1;
        }
        else {
            prev = num;
        }
    }
    // N:不翻转第一个字符交换次数为count,翻转为s.length - count
    return Math.min(count, s.length - count);
}
;
console.log(minOperations("111000000"));
//# sourceMappingURL=29th.js.map
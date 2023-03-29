"use strict";
/**
 * 1641. 统计字典序元音字符串的数目
 * 给你一个整数 n，请返回长度为 n 、仅由元音 (a, e, i, o, u) 组成且按 字典序排列 的字符串数量。
 * 字符串 s 按 字典序排列 需要满足：对于所有有效的 i，s[i] 在字母表中的位置总是与 s[i+1] 相同或在 s[i+1] 之前。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/count-sorted-vowel-strings/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function countVowelStrings(n) {
    // N:组合计算
    return (n + 1) * (n + 2) * (n + 3) * (n + 4) / 24;
}
;
//# sourceMappingURL=29th.js.map
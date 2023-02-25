"use strict";
/**
 * 1247. 交换字符使得字符串相同
 * 有两个长度相同的字符串 s1 和 s2，且它们其中 只含有 字符 "x" 和 "y"，你需要通过「交换字符」的方式使这两个字符串相同。
 * 每次「交换字符」的时候，你都可以在两个字符串中各选一个字符进行交换。
 * 交换只能发生在两个不同的字符串之间，绝对不能发生在同一个字符串内部。也就是说，我们可以交换 s1[i] 和 s2[j]，但不能交换 s1[i] 和 s1[j]。
 * 最后，请你返回使 s1 和 s2 相同的最小交换次数，如果没有方法能够使得这两个字符串相同，则返回 -1 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/minimum-swaps-to-make-strings-equal/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function minimumSwap(s1, s2) {
    let xy = 0;
    let yx = 0;
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] != s2[i]) {
            s1[i] == "x" ? xy++ : yx++;
        }
    }
    let count = xy + yx;
    if (count % 2 != 0) {
        return -1;
    }
    // 观察得到规律:
    // 偶数xy与偶数yx组合,交换次数为count / 2
    // 奇数xy与奇数yx组合,交换次数为count / 2 + 1
    return (count / 2) + (xy % 2);
}
;
console.log(minimumSwap("xxxxyy", "yyyyxx"));
//# sourceMappingURL=25th.js.map
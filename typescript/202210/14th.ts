/**
 * 940. 不同的子序列 II
 * 给定一个字符串 s，计算 s 的 不同非空子序列 的个数。因为结果可能很大，所以返回答案需要对 10^9 + 7 取余 。
 * 字符串的 子序列 是经由原字符串删除一些（也可能不删除）字符但不改变剩余字符相对位置的一个新字符串。
 * 例如，"ace" 是 "abcde" 的一个子序列，但 "aec" 不是。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/distinct-subsequences-ii
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function distinctSubseqII(s: string): number {
    let list = new Array(26).fill(0);
    let mod = 1e9+7;
    let code = "a".charCodeAt(0);
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let letter = s.charCodeAt(i) - code;
        // 前一次该字母组成子序列的个数
        let prev = list[letter];
        // 总数增加字母自身1个
        list[letter] = (total + 1) % mod;
        // 该字母与所有子序列组合增加新的子序列,去掉前一次该字母组成的个数(去重)
        total = ((total + list[letter] - prev) % mod + mod) % mod;
    }

    return total;
};

console.log(distinctSubseqII("blljuffdyfrkqtwfyfztpdiyktrhftgtabxxoibcclbjvirnqyynkyaqlxgyybkgyzvcahmytjdqqtctirnxfjpktxmjkojlvvrr"));
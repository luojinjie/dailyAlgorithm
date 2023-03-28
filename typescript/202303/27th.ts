/**
 * 1638. 统计只差一个字符的子串数目
 * 给你两个字符串 s 和 t ，请你找出 s 中的非空子串的数目，这些子串满足替换 一个不同字符 以后，是 t 串的子串。换言之，请你找到 s 和 t 串中 恰好 只有一个字符不同的子字符串对的数目。
 * 比方说， "computer" and "computation" 只有一个字符不同： 'e'/'a' ，所以这一对子字符串会给答案加 1 。
 * 请你返回满足上述条件的不同子字符串对数目。
 * 一个 子字符串 是一个字符串中连续的字符。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/count-substrings-that-differ-by-one-character/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function countSubstrings(s: string, t: string): number {
    let n = s.length;
    let m = t.length;
    let res = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let count = 0;
            for (let k = 0; k + i < n && k + j < m; k++) {
                if (s[k + i] != t[k + j]) {
                    count++;
                }

                if (count == 1) {
                    res++;
                } else if (count == 2) {
                    break;
                }
            }
        }
    }

    return res;
};

console.log(countSubstrings("aba", "baba"))
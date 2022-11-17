/**
 * 1704. 判断字符串的两半是否相似
 * 给你一个偶数长度的字符串 s 。将其拆分成长度相同的两半，前一半为 a ，后一半为 b 。
 * 两个字符串 相似 的前提是它们都含有相同数目的元音（'a'，'e'，'i'，'o'，'u'，'A'，'E'，'I'，'O'，'U'）。注意，s 可能同时含有大写和小写字母。
 * 如果 a 和 b 相似，返回 true ；否则，返回 false 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/determine-if-string-halves-are-alike/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
let vowelMap = { "a": 1, "e": 1, "i": 1, "o": 1, "u": 1, "A": 1, "E": 1, "I": 1, "O": 1, "U": 1 };
function halvesAreAlike(s: string): boolean {
    let middle = s.length / 2;
    let same = 0;
    for (let i = 0; i < s.length; i++) {
        if (!vowelMap[s[i]]) {
            continue;
        }

        if (i < middle) {
            same++;
        } else {
            same--;
        }
    }

    return same == 0;
};

console.log(halvesAreAlike("book"))
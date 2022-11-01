/**
 * 1662. 检查两个字符串数组是否相等
 * 给你两个字符串数组 word1 和 word2 。如果两个数组表示的字符串相同，返回 true ；否则，返回 false 。
 * 数组表示的字符串 是由数组中的所有元素 按顺序 连接形成的字符串。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/check-if-two-string-arrays-are-equivalent
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
    // 字符串数组索引
    let idx1 = 0;
    let idx2 = 0;

    // 字符索引
    let i = 0;
    let j = 0;

    // 原地遍历
    while (word1[idx1] && word2[idx2]) {
        if (word1[idx1][i] != word2[idx2][j]) {
            return false;
        }

        i++;
        j++;

        if (!word1[idx1][i]) {
            idx1++;
            i = 0;
        }
        if (!word2[idx2][j]) {
            idx2++;
            j = 0;
        }
    }

    // 有未遍历完的字符串
    if (word1[idx1] || word2[idx2]) {
        return false;
    }

    return true;
};

console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddef"]))
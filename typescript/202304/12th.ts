/**
 * 1147. 段式回文
 * 你会得到一个字符串 text 。你应该把它分成 k 个子字符串 (subtext1, subtext2，…， subtextk) ，要求满足:
 * subtexti 是 非空 字符串
 * 所有子字符串的连接等于 text ( 即subtext1 + subtext2 + ... + subtextk == text )
 * 对于所有 i 的有效值( 即 1 <= i <= k ) ，subtexti == subtextk - i + 1 均成立
 * 返回k可能最大值。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/longest-chunked-palindrome-decomposition/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function longestDecomposition(text: string): number {
    let n = text.length;
    if (n == 0) {
        return 0;
    }

    // 贪心
    let i = 1;
    let j = text.length - 1;
    while (i <= j) {
        if (text.substring(0, i) == text.substring(j, n)) {
            return 2 + longestDecomposition(text.substring(i, j));
        }
        i++;
        j--;
    }

    return 1;
};

console.log(longestDecomposition("elvtoelvto"))
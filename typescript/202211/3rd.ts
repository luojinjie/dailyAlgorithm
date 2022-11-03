/**
 * 1668. 最大重复子字符串
 * 给你一个字符串 sequence ，如果字符串 word 连续重复 k 次形成的字符串是 sequence 的一个子字符串，那么单词 word 的 重复值为 k 。单词 word 的 最大重复值 是单词 word 在 sequence 中最大的重复值。如果 word 不是 sequence 的子串，那么重复值 k 为 0 。
 * 给你一个字符串 sequence 和 word ，请你返回 最大重复值 k 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/maximum-repeating-substring
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function maxRepeating(sequence: string, word: string): number {
    let max = 0;
    let dp = new Array(sequence.length + 1).fill(0);
    for (let i = 1; i <= sequence.length; i++) {
        if (i < word.length) {
            continue;
        }

        // 从后往前匹配字符串
        let wIdx = word.length - 1;
        // 索引值从1开始,需要倒扣
        let sIdx = i - 1;
        while (wIdx >= 0) {
            if (word[wIdx] != sequence[sIdx]) {
                break;
            }
            wIdx--;
            sIdx--;
        }

        if (wIdx < 0) {
            dp[i] = dp[i - word.length] + 1;
            max = Math.max(max, dp[i]);
        }
    }

    return max;
};

console.log(maxRepeating("aaabaaaabaaabaaaabaaaabaaaabaaaaba", "aaaba"))
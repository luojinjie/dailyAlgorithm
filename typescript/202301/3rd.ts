import { isDigit } from "../common/common";

/**
 * 2042. 检查句子中的数字是否递增
 * 句子是由若干 token 组成的一个列表，token 间用 单个 空格分隔，句子没有前导或尾随空格。每个 token 要么是一个由数字 0-9 组成的不含前导零的 正整数 ，要么是一个由小写英文字母组成的 单词 。
 * 示例，"a puppy has 2 eyes 4 legs" 是一个由 7 个 token 组成的句子："2" 和 "4" 是数字，其他像 "puppy" 这样的 tokens 属于单词。
 * 给你一个表示句子的字符串 s ，你需要检查 s 中的 全部 数字是否从左到右严格递增（即，除了最后一个数字，s 中的 每个 数字都严格小于它 右侧 的数字）。
 * 如果满足题目要求，返回 true ，否则，返回 false 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function areNumbersAscending(s: string): boolean {
    let zero = "0".charCodeAt(0);
    let prev = 0;
    let i = 0;
    while (i < s.length) {
        if (isDigit(s[i])) {
            let cur = 0;
            while (i < s.length && isDigit(s[i])) {
                cur = cur * 10 + (s.charCodeAt(i) - zero);
                i++;
            }

            if (cur <= prev) {
                return false;
            }

            prev = cur;
        } else {
            i++;
        }
    }

    return true;
};

console.log(areNumbersAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"))
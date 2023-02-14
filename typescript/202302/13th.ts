/**
 * 1234. 替换子串得到平衡字符串
 * 有一个只含有 'Q', 'W', 'E', 'R' 四种字符，且长度为 n 的字符串。
 * 假如在该字符串中，这四个字符都恰好出现 n/4 次，那么它就是一个「平衡字符串」。
 * 给你一个这样的字符串 s，请通过「替换一个子串」的方式，使原字符串 s 变成一个「平衡字符串」。
 * 你可以用和「待替换子串」长度相同的 任何 其他字符串来完成替换。
 * 请返回待替换子串的最小可能长度。
 * 如果原字符串自身就是一个平衡字符串，则返回 0。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/replace-the-substring-for-balanced-string/description/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function balancedString(s: string): number {
    let map: Map<string, number> = new Map();
    let part = s.length / 4;
    for (let i = 0; i < s.length; i++) {
        let temp = map.get(s[i]) || 0;
        map.set(s[i], temp + 1);
    }

    // 无需替换
    if (checkCount(map, part)) {
        return 0;
    }

    let count = s.length;
    // 滑动窗口,移除[left, right)范围的子串,剩余的字符均 ≤ n/4
    for (let left = 0, right = 0; left < s.length; left++) {
        while (right < s.length && !checkCount(map, part)) {
            map.set(s[right], map.get(s[right]) - 1);
            right++;
        }

        // 窗口移动不再满足条件
        if (!checkCount(map, part)) {
            break;
        }

        count = Math.min(count, right - left);
        map.set(s[left], map.get(s[left]) + 1);
    }

    return count;
};

const base = "QWER";
function checkCount(map: Map<string, number>, part: number): boolean {
    for (let i = 0; i < base.length; i++) {
        let temp = map.get(base[i]) || 0;
        if (temp > part) {
            return false;
        }
    }

    return true;
}

console.log(balancedString("QWEQQRQQ"))
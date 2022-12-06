/**
 * 1796. 字符串中第二大的数字
 * 给你一个混合字符串 s ，请你返回 s 中 第二大 的数字，如果不存在第二大的数字，请你返回 -1 。
 * 混合字符串 由小写英文字母和数字组成。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/second-largest-digit-in-a-string/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function secondHighest(s: string): number {
    let zero = "0".charCodeAt(0);
    let first = -1;
    let second = -1;
    for (let i = 0; i < s.length; i++) {
        let dif = s.charCodeAt(i) - zero;
        if (dif >= 0 && dif < 10) {
            if (dif > first) {
                second = first;
                first = dif;
            } else if (dif > second && dif < first) {
                second = dif;
            }
        }
    }

    return second;
};

console.log(secondHighest("abc1111"))
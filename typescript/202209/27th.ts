/**
 * 面试题 01.02. 判定是否互为字符重排
 * 给定两个字符串 s1 和 s2，请编写一个程序，确定其中一个字符串的字符重新排列后，能否变成另一个字符串。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/check-permutation-lcci
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function CheckPermutation(s1: string, s2: string): boolean {
    if ((!s1 && s1 != "") || (!s2 && s2 != "") || s1.length != s2.length) {
        return false;
    }

    let cntMap = {};
    for (let i = 0; i < s1.length; i++) {
        if (!cntMap[s1[i]]) {
            cntMap[s1[i]] = 0;
        }
        cntMap[s1[i]]++;
    }

    for (let i = 0; i < s2.length; i++) {
        if (!cntMap[s2[i]]) {
            return false;
        }

        cntMap[s2[i]]--;
    }

    return true;
};

console.log(CheckPermutation("", ""));
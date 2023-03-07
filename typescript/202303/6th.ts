/**
 * 1653. 使字符串平衡的最少删除次数
 * 给你一个字符串 s ，它仅包含字符 'a' 和 'b'​​​​ 。
 * 你可以删除 s 中任意数目的字符，使得 s 平衡 。当不存在下标对 (i,j) 满足 i < j ，且 s[i] = 'b' 的同时 s[j]= 'a' ，此时认为 s 是 平衡 的。
 * 请你返回使 s 平衡 的 最少 删除次数。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/minimum-deletions-to-make-string-balanced/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function minimumDeletions(s: string): number {
    let cntA = 0;
    let cntB = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "a") {
            cntA++;
        }
    }

    let res = cntA;
    for (let i = 0; i < s.length; i++) {
        // i为ab之间的分割点
        if (s[i] == "a") {
            cntA--;
        } else {
            cntB++;
        }
        // 分割点右侧需要删除"a"的数量 + 左侧需要删除"b"的数量 = 当前分割点下最少的删除次数
        res = Math.min(res, cntA + cntB);
    }

    return res;
};

console.log(minimumDeletions("aababbab"))
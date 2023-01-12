/**
 * 2283. 判断一个数的数字计数是否等于数位的值
 * 给你一个下标从 0 开始长度为 n 的字符串 num ，它只包含数字。
 * 如果对于 每个 0 <= i < n 的下标 i ，都满足数位 i 在 num 中出现了 num[i]次，那么请你返回 true ，否则返回 false 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/minimum-number-of-operations-to-reinitialize-a-permutation/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function digitCount(num: string): boolean {
    let map: Map<number, number> = new Map();
    for (let i = 0; i < num.length; i++) {
        let n = Number(num[i]);
        let temp = (map.get(n) || 0) + 1;
        map.set(n, temp);
    }

    for (let i = 0; i < num.length; i++) {
        let n = Number(num[i]);
        if ((map.get(i) || 0) != n) {
            return false;
        }
    }

    return true;
};

console.log(digitCount("1210"))
"use strict";
/**
 * 1803. 统计异或值在范围内的数对有多少
 * 给你一个整数数组 nums （下标 从 0 开始 计数）以及两个整数：low 和 high ，请返回 漂亮数对 的数目。
 * 漂亮数对 是一个形如 (i, j) 的数对，其中 0 <= i < j < nums.length 且 low <= (nums[i] XOR nums[j]) <= high 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/count-pairs-with-xor-in-a-range/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function countPairs(nums, low, high) {
    return f(nums, high) - f(nums, low - 1);
}
;
// 已知nums范围 <= 2 * 10 ** 4, 得出最高15位, 0,1,……,14
const MAX_BIT = 14;
// 字典树
class Trie {
    constructor() {
        this.son = null;
        this.sum = 0;
        this.son = new Array(2).fill(0);
    }
}
let f = (nums, x) => {
    var root = new Trie();
    // 插入到字典树
    let insert = (num) => {
        let cur = root;
        for (let i = MAX_BIT; i >= 0; i--) {
            let bit = num >> i & 1;
            if (!cur.son[bit]) {
                cur.son[bit] = new Trie();
            }
            cur = cur.son[bit];
            cur.sum++;
        }
    };
    // 查找小于x的漂亮数对
    let search = (num, x) => {
        let cur = root;
        let sum = 0;
        for (let i = MAX_BIT; i >= 0; i--) {
            let bit = num >> i & 1;
            if ((x >> i & 1) == 1) { // 如果x的第i位是1,则num第i位为1或0时异或出来一定小于x
                if (cur.son[bit]) {
                    sum += cur.son[bit].sum;
                }
                if (!cur.son[bit ^ 1]) {
                    return sum;
                }
                cur = cur.son[bit ^ 1];
            }
            else { // 如果x的第i为是0,则num是0或1都不能保证异或出来的值小于x, 继续遍历判断
                if (!cur.son[bit]) {
                    return sum;
                }
                cur = cur.son[bit];
            }
        }
        sum += cur.sum;
        return sum;
    };
    let count = 0;
    for (let i = 1; i < nums.length; i++) {
        insert(nums[i - 1]);
        count += search(nums[i], x);
    }
    return count;
};
console.log(countPairs([9, 8, 4, 2, 1], 5, 14));
//# sourceMappingURL=5th.js.map
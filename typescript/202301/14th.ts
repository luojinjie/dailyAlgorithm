/**
 * 1819. 序列中不同最大公约数的数目
 * 给你一个由正整数组成的数组 nums 。
 * 数字序列的 最大公约数 定义为序列中所有整数的共有约数中的最大整数。
 * 例如，序列 [4,6,16] 的最大公约数是 2 。
 * 数组的一个 子序列 本质是一个序列，可以通过删除数组中的某些元素（或者不删除）得到。
 * 例如，[2,5,10] 是 [1,2,1,2,4,1,5,10] 的一个子序列。
 * 计算并返回 nums 的所有 非空 子序列中 不同 最大公约数的 数目 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/number-of-different-subsequences-gcds/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import { gcd } from "../common/common";

function countDifferentSubsequenceGCDs(nums: number[]): number {
    // 取最大值
    let max = Math.max.apply(null, nums);
    // 记录出现过的数值
    let map: Map<number, boolean> = new Map()
    for (let num of nums) {
        map.set(num, true);
    }

    let count = 0;

    // 遍历寻找最大公约数为 i 的子序列
    for (let i = 1; i <= max; i++) {
        // 子序列最大公约数
        let subGcd = 0;
        for (let j = i; j <= max; j += i) { // 根据最大公约数的性质,j 成 i 倍递增
            if (map.get(j)) {
                if (subGcd == 0) { // 首个出现的数值,最大公约数就是其自身
                    subGcd = j;
                } else {
                    subGcd = gcd(subGcd, j);
                }

                if (subGcd == i) { // 最大公约数符合,只需要取1次,需要break
                    count++;
                    break;
                }
            }
        }
    }

    return count;
};

console.log(countDifferentSubsequenceGCDs([6, 3, 10]))
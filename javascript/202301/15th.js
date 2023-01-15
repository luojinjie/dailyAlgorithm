"use strict";
/**
 * 2293. 极大极小游戏
 * 给你一个下标从 0 开始的整数数组 nums ，其长度是 2 的幂。对 nums 执行下述算法：
 * 设 n 等于 nums 的长度，如果 n == 1 ，终止 算法过程。否则，创建 一个新的整数数组 newNums ，新数组长度为 n / 2 ，下标从 0 开始。
 * 对于满足 0 <= i < n / 2 的每个 偶数 下标 i ，将 newNums[i] 赋值 为 min(nums[2 * i], nums[2 * i + 1]) 。
 * 对于满足 0 <= i < n / 2 的每个 奇数 下标 i ，将 newNums[i] 赋值 为 max(nums[2 * i], nums[2 * i + 1]) 。
 * 用 newNums 替换 nums 。
 * 从步骤 1 开始 重复 整个过程。
 * 执行算法后，返回 nums 中剩下的那个数字。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/min-max-game/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function minMaxGame(nums) {
    let n = nums.length;
    if (n == 1) {
        return nums[0];
    }
    let newNums = new Array(n / 2);
    for (let j = 0; j < n / 2; j++) {
        if (j % 2 == 0) { // 偶数
            newNums[j] = Math.min(nums[2 * j], nums[2 * j + 1]);
        }
        else { // 奇数 
            newNums[j] = Math.max(nums[2 * j], nums[2 * j + 1]);
        }
    }
    return minMaxGame(newNums);
}
;
console.log(minMaxGame([1, 3, 5, 2, 4, 8, 2, 2]));
//# sourceMappingURL=15th.js.map
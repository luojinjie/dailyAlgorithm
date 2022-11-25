/**
 * 795. 区间子数组个数
 * 给你一个整数数组 nums 和两个整数：left 及 right 。找出 nums 中连续、非空且其中最大元素在范围 [left, right] 内的子数组，并返回满足条件的子数组的个数。
 * 生成的测试用例保证结果符合 32-bit 整数范围。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/number-of-subarrays-with-bounded-maximum/description/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function numSubarrayBoundedMax(nums: number[], left: number, right: number): number {
    let count = 0;
    let fit = -1;
    let notFit = -1;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] >= left && nums[i] <= right) {
            fit = i; // 记录最新满足范围的索引值
        } else if (nums[i] > right) {
            notFit = i; // 重置不满足范围的索引值
            fit = -1; // 移除记录
        }

        if (fit != -1) {
            // 满足范围的索引值 - 不满足范围的索引值 = 满足范围的子数组个数
            count += fit - notFit;
        }
    }

    return count;
};

console.log(numSubarrayBoundedMax([2, 1, 4, 3], 2, 3))
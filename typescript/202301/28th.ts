/**
 * 1664. 生成平衡数组的方案数
 * 给你一个整数数组 nums 。你需要选择 恰好 一个下标（下标从 0 开始）并删除对应的元素。请注意剩下元素的下标可能会因为删除操作而发生改变。
 * 比方说，如果 nums = [6,1,7,4,1] ，那么：
 * 选择删除下标 1 ，剩下的数组为 nums = [6,7,4,1] 。
 * 选择删除下标 2 ，剩下的数组为 nums = [6,1,4,1] 。
 * 选择删除下标 4 ，剩下的数组为 nums = [6,1,7,4] 。
 * 如果一个数组满足奇数下标元素的和与偶数下标元素的和相等，该数组就是一个 平衡数组 。
 * 请你返回删除操作后，剩下的数组 nums 是 平衡数组 的 方案数 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/ways-to-make-a-fair-array/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function waysToMakeFair(nums: number[]): number {
    let count = 0;
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 == 0) {
            sumEven += nums[i];
        } else {
            sumOdd += nums[i];
        }
    }

    let odd = 0;
    let even = 0;
    for (let i = 0; i < nums.length; i++) {
        // 奇偶总数减少
        if (i % 2 == 0) {
            sumEven -= nums[i];
        } else {
            sumOdd -= nums[i];
        }

        // 交替相加
        if (odd + sumEven == even + sumOdd) {
            count++;
        }

        // 索引前的奇偶累加
        if (i % 2 == 0) {
            even += nums[i];
        } else {
            odd += nums[i];
        }
    }

    return count;
};

console.log(waysToMakeFair([1, 2, 3]))
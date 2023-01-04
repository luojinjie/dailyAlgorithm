/**
 * 1802. 有界数组中指定下标处的最大值
 * 给你三个正整数 n、index 和 maxSum 。你需要构造一个同时满足下述所有条件的数组 nums（下标 从 0 开始 计数）：
 * nums.length == n
 * nums[i] 是 正整数 ，其中 0 <= i < n
 * abs(nums[i] - nums[i+1]) <= 1 ，其中 0 <= i < n-1
 * nums 中所有元素之和不超过 maxSum
 * nums[index] 的值被 最大化
 * 返回你所构造的数组中的 nums[index] 。
 * 注意：abs(x) 等于 x 的前提是 x >= 0 ；否则，abs(x) 等于 -x 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/check-if-numbers-are-ascending-in-a-sentence/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function maxValue(n: number, index: number, maxSum: number): number {
    let left = 1;
    let right = maxSum;

    while (left < right) {
        let middle = Math.floor((left + right + 1) / 2);
        let sum = middle + getSum(middle - 1, index) + getSum(middle - 1, n - 1 - index);
        if (sum <= maxSum) {
            left = middle;
        } else {
            right = middle - 1;
        }
    }

    return left;
};

// 求和
function getSum(x: number, cnt: number): number {
    if (x >= cnt) {
        // 数值递减则最小值是 x - count + 1, 最大值是 x, 等差数列: (首项 + 末项) * 项数 / 2, 也就是 (x + x - cnt + 1) * cnt / 2
        return (x + x - cnt + 1) * cnt / 2;
    } else {
        // 数值递减到 1 有剩余, 递减到 1 的元素和为 (1 + x) * x / 2, 剩余个数 cnt - x 且都是 1, 也就是 (x + 1) * x / 2 + cnt - x
        return (x + 1) * x / 2 + cnt - x;
    }
}

console.log(maxValue(4, 2, 6))
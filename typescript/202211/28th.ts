/**
 * 813. 最大平均值和的分组
 * 给定数组 nums 和一个整数 k 。我们将给定的数组 nums 分成 最多 k 个相邻的非空子数组 。 分数 由每个子数组内的平均值的总和构成。
 * 注意我们必须使用 nums 数组中的每一个数进行分组，并且分数不一定需要是整数。
 * 返回我们所能得到的最大 分数 是多少。答案误差在 10-6 内被视为是正确的。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/largest-sum-of-averages/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function largestSumOfAverages(nums: number[], k: number): number {
    let m = nums.length;
    let dp = new Array(m + 1).fill(0).map(() => new Array(k + 1).fill(0));
    let prev = new Array(m + 1).fill(0);
    for (let i = 0; i < m; i++) {
        prev[i + 1] = prev[i] + nums[i];
    }

    for (let i = 1; i < dp.length; i++) {
        dp[i][1] = prev[i] / i;
    }

    // 从2个分组开始遍历
    for (let j = 2; j <= k; j++) {
        // 子数组内元素个数与分组数量相同开始
        for (let i = j; i <= m; i++) {
            // 以x为边界分组
            for (let x = j - 1; x < i; x++) {
                dp[i][j] = Math.max(dp[i][j], dp[x][j - 1] + (prev[i] - prev[x]) / (i - x));
            }
        }
    }

    return dp[m][k];
};

console.log(largestSumOfAverages([9, 1, 2, 3, 9], 3))
"use strict";
/**
 * 1223. 掷骰子模拟
 * 有一个骰子模拟器会每次投掷的时候生成一个 1 到 6 的随机数。
 * 不过我们在使用它时有个约束，就是使得投掷骰子时，连续 掷出数字 i 的次数不能超过 rollMax[i]（i 从 1 开始编号）。
 * 现在，给你一个整数数组 rollMax 和一个整数 n，请你来计算掷 n 次骰子可得到的不同点数序列的数量。
 * 假如两个序列中至少存在一个元素不同，就认为这两个序列是不同的。由于答案可能很大，所以请返回 模 10^9 + 7 之后的结果。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/dice-roll-simulation/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function dieSimulator(n, rollMax) {
    let mod = 1e9 + 7;
    // dp[i][j][k] 表示第 i(1 ~ n) 次投掷点数为 j(1 ~ 6) ,连续出现 j 点数 k 次的组合数
    let dp = new Array(n + 1).fill(0).map(() => new Array(7).fill(0).map(() => new Array(16).fill(0)));
    // 第一次投掷初始化
    for (let i = 1; i < 7; i++) {
        dp[1][i][1] = 1;
    }
    // 从第二次投掷开始计算
    for (let i = 2; i < n + 1; i++) {
        // 点数
        for (let j = 1; j < 7; j++) {
            // 投掷连续
            // k 小于等于约束值的情况下:
            // 第 i 次投掷点数为 j 连续 k 次的组合数等于
            // 第 i - 1 次投掷点数为 j 连续 k - 1 次的组合数
            for (let k = 2; k <= rollMax[j - 1]; k++) {
                dp[i][j][k] = dp[i - 1][j][k - 1];
            }
            // 投掷非连续
            let count = 0;
            for (let jj = 1; jj < 7; jj++) {
                // 投掷连续在上面已处理,跳过
                if (j == jj) {
                    continue;
                }
                // j 出现 1 次的组合数等于上一轮投掷出非 j 的所有情况和
                for (let k = 0; k < 16; k++) {
                    count += dp[i - 1][jj][k];
                    count %= mod;
                }
            }
            dp[i][j][1] = count;
        }
    }
    // 整合所有组合数
    let total = 0;
    for (let j = 1; j < 7; j++) {
        for (let k = 1; k < 16; k++) {
            total = (total + dp[n][j][k]) % mod;
        }
    }
    return total;
}
;
console.log(dieSimulator(3, [1, 1, 1, 2, 2, 3]));
//# sourceMappingURL=10th.js.map
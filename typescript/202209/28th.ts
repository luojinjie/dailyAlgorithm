/**
 * 面试题 17.09. 第 k 个数
 * 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/get-kth-magic-number-lcci
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function getKthMagicNumber(k: number): number {
    let dp = new Array(k + 1).fill(0);
    let p3 = 1, p5 = 1, p7 = 1;
    dp[1] = 1;
    for (let i = 2; i <= k; i++) {
        let n3 = dp[p3] * 3, n5 = dp[p5] * 5, n7 = dp[p7] * 7;
        dp[i] = Math.min(n3, n5, n7);
        // 独立的if是为了去重
        if (dp[i] == n3) {
            p3++;
        }
        if (dp[i] == n5) {
            p5++;
        }
        if (dp[i] == n7) {
            p7++;
        }
    }

    return dp[k];
};

console.log(getKthMagicNumber(10))
"use strict";
/**
 * 1140. 石子游戏 II
 * 爱丽丝和鲍勃继续他们的石子游戏。许多堆石子 排成一行，每堆都有正整数颗石子 piles[i]。游戏以谁手中的石子最多来决出胜负。
 * 爱丽丝和鲍勃轮流进行，爱丽丝先开始。最初，M = 1。
 * 在每个玩家的回合中，该玩家可以拿走剩下的 前 X 堆的所有石子，其中 1 <= X <= 2M。然后，令 M = max(M, X)。
 * 游戏一直持续到所有石子都被拿走。
 * 假设爱丽丝和鲍勃都发挥出最佳水平，返回爱丽丝可以得到的最大数量的石头。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/stone-game-ii/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function stoneGameII(piles) {
    let n = piles.length;
    // 前缀和
    let prev = new Array(n + 1).fill(0);
    // 记录表
    let mem = new Array(n + 1);
    for (let i = 0; i < n; i++) {
        prev[i + 1] = prev[i] + piles[i];
        mem[i] = new Array(n + 1);
    }
    let dfs = (i, m) => {
        // 能够把剩余的石堆取完
        if (2 * m >= n - i) {
            return prev[n] - prev[i];
        }
        // 重复计算
        if (mem[i][m]) {
            return mem[i][m];
        }
        mem[i][m] = 0;
        for (let j = 1; j <= 2 * m; j++) {
            mem[i][m] = Math.max(mem[i][m], prev[n] - prev[i] - dfs(i + j, Math.max(m, j)));
        }
        return mem[i][m];
    };
    return dfs(0, 1);
}
;
console.log(stoneGameII([2, 7, 9, 4, 4]));
//# sourceMappingURL=22nd.js.map
/**
 * 1626. 无矛盾的最佳球队
 * 假设你是球队的经理。对于即将到来的锦标赛，你想组合一支总体得分最高的球队。球队的得分是球队中所有球员的分数 总和 。
 * 然而，球队中的矛盾会限制球员的发挥，所以必须选出一支 没有矛盾 的球队。如果一名年龄较小球员的分数 严格大于 一名年龄较大的球员，则存在矛盾。同龄球员之间不会发生矛盾。
 * 给你两个列表 scores 和 ages，其中每组 scores[i] 和 ages[i] 表示第 i 名球员的分数和年龄。请你返回 所有可能的无矛盾球队中得分最高那支的分数 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/best-team-with-no-conflicts/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function bestTeamScore(scores: number[], ages: number[]): number {
    let n = scores.length;
    let people = new Array(n).fill(0).map(() => new Array(2).fill(0));
    for (let i = 0; i < n; i++) {
        people[i] = [scores[i], ages[i]];
    }

    // 分数从小到大排序,同分数以年龄从小到大排序
    people.sort((a: number[], b: number[]) => a[0] != b[0] ? a[0] - b[0] : a[1] - b[1]);

    let dp = new Array(n).fill(0);
    let res = 0;
    for (let i = 0; i < n; i++) {
        // 第 i 个球员必选时可达到的最高分
        let max = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (people[j][1] <= people[i][1]) {
                max = Math.max(max, dp[j]);
            }
        }
        dp[i] = max + people[i][0];
        res = Math.max(res, dp[i]);
    }

    return res;
};

console.log(bestTeamScore([4, 5, 6, 5], [2, 1, 2, 1]))
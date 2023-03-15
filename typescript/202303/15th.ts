/**
 * 1615. 最大网络秩
 * n 座城市和一些连接这些城市的道路 roads 共同组成一个基础设施网络。每个 roads[i] = [ai, bi] 都表示在城市 ai 和 bi 之间有一条双向道路。
 * 两座不同城市构成的 城市对 的 网络秩 定义为：与这两座城市 直接 相连的道路总数。如果存在一条道路直接连接这两座城市，则这条道路只计算 一次 。
 * 整个基础设施网络的 最大网络秩 是所有不同城市对中的 最大网络秩 。
 * 给你整数 n 和数组 roads，返回整个基础设施网络的 最大网络秩 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/maximal-network-rank/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function maximalNetworkRank(n: number, roads: number[][]): number {
    // 记录城市间是否存在连接
    let link = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // 每个城市的度数(与其他城市相连的数量)
    let degree = new Array(n).fill(0);
    for (let road of roads) {
        link[road[0]][road[1]] = 1;
        link[road[1]][road[0]] = 1;
        degree[road[0]]++;
        degree[road[1]]++;
    }

    let max = 0;
    // 枚举城市(两两组合)
    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            max = Math.max(max, degree[i] + degree[j] - link[i][j]);
        }
    }

    return max;
};

console.log(maximalNetworkRank(8, [[0, 1], [1, 2], [2, 3], [2, 4], [5, 6], [5, 7]]))
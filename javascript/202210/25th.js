"use strict";
/**
 * 934. 最短的桥
 * 给你一个大小为 n x n 的二元矩阵 grid ，其中 1 表示陆地，0 表示水域。
 * 岛 是由四面相连的 1 形成的一个最大组，即不会与非组内的任何其他 1 相连。grid 中 恰好存在两座岛 。
 * 你可以将任意数量的 0 变为 1 ，以使两座岛连接起来，变成 一座岛 。
 * 返回必须翻转的 0 的最小数目。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/shortest-bridge
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function shortestBridge(grid) {
    let direct = [[0, -1], [0, 1], [-1, 0], [1, 0]]; // 上下左右
    let land = [];
    let len = grid.length;
    // 深度遍历找出岛1并标记值为2
    let dfs = (x, y) => {
        if (!inLand(len, x, y) || grid[x][y] != 1) {
            return;
        }
        grid[x][y] = 2;
        land.push([x, y]);
        for (let dir of direct) {
            dfs(x + dir[0], y + dir[1]);
        }
    };
    // 广度遍历一层层往外找另一个岛
    let bfs = () => {
        let count = -1;
        let edge = land;
        while (edge.length) {
            let size = edge.length;
            count++;
            while (size--) {
                let item = edge.shift();
                for (let dir of direct) {
                    let newX = item[0] + dir[0];
                    let newY = item[1] + dir[1];
                    if (!inLand(len, newX, newY) || grid[newX][newY] == 2) {
                        continue;
                    }
                    if (grid[newX][newY] == 1) {
                        return count;
                    }
                    if (grid[newX][newY] == 0) {
                        grid[newX][newY] = 2;
                        edge.push([newX, newY]);
                    }
                }
            }
        }
    };
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (grid[i][j] == 1) {
                dfs(i, j);
                return bfs();
            }
        }
    }
    return -1;
}
;
function inLand(n, x, y) {
    if (x >= n || x < 0 || y >= n || y < 0) {
        return false;
    }
    return true;
}
console.log(shortestBridge([[1, 1, 1, 1, 1], [1, 0, 0, 0, 1], [1, 0, 1, 0, 1], [1, 0, 0, 0, 1], [1, 1, 1, 1, 1]]));
//# sourceMappingURL=25th.js.map
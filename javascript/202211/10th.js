"use strict";
/**
 * 864. 获取所有钥匙的最短路径
 * 给定一个二维网格 grid ，其中：
 * '.' 代表一个空房间
 * '#' 代表一堵
 * '@' 是起点
 * 小写字母代表钥匙
 * 大写字母代表锁
 * 我们从起点开始出发，一次移动是指向四个基本方向之一行走一个单位空间。我们不能在网格外面行走，也无法穿过一堵墙。如果途经一个钥匙，我们就把它捡起来。除非我们手里有对应的钥匙，否则无法通过锁。
 * 假设 k 为 钥匙/锁 的个数，且满足 1 <= k <= 6，字母表中的前 k 个字母在网格中都有自己对应的一个小写和一个大写字母。换言之，每个锁有唯一对应的钥匙，每个钥匙也有唯一对应的锁。另外，代表钥匙和锁的字母互为大小写并按字母顺序排列。
 * 返回获取所有钥匙所需要的移动的最少次数。如果无法获取所有钥匙，返回 -1 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/shortest-path-to-get-all-keys/description/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function shortestPathAllKeys(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let dist = new Array(m).fill(0).map(() => new Array(n).fill(0).map(() => new Array(1 << 6).fill(0)));
    let count = 0;
    let queue = [];
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == "@") {
                queue.push([i, j, 0]);
            }
            else if (grid[i][j] >= "a" && grid[i][j] <= "f") {
                count++;
            }
        }
    }
    while (queue.length) {
        let info = queue.shift();
        let x = info[0];
        let y = info[1];
        let mask = info[2];
        let step = dist[x][y][mask];
        for (let i = 0; i < dirs.length; i++) {
            let newX = info[0] + dirs[i][0];
            let newY = info[1] + dirs[i][1];
            // 溢出网格
            if (newX < 0 || newX >= m || newY < 0 || newY >= n) {
                continue;
            }
            let char = grid[newX][newY];
            // 无效字符
            if (char == "#") {
                continue;
            }
            // 遇到锁
            if (char >= "A" && char <= "Z" && (mask & (1 << (char.charCodeAt(0) - "A".charCodeAt(0)))) == 0) {
                continue;
            }
            // 遇到钥匙
            let temp = mask;
            if (char >= "a" && char <= "f") {
                temp |= 1 << (char.charCodeAt(0) - "a".charCodeAt(0));
                if (temp == (1 << count) - 1) {
                    return step + 1;
                }
            }
            if (dist[newX][newY][temp] != 0) {
                continue;
            }
            queue.push([newX, newY, temp]);
            dist[newX][newY][temp] = step + 1;
        }
    }
    return -1;
}
;
console.log(shortestPathAllKeys(["@...a", ".###A", "b.BCc"]));
//# sourceMappingURL=10th.js.map
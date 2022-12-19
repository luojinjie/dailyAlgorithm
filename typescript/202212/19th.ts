/**
 * 1971. 寻找图中是否存在路径
 * 有一个具有 n 个顶点的 双向 图，其中每个顶点标记从 0 到 n - 1（包含 0 和 n - 1）。图中的边用一个二维整数数组 edges 表示，其中 edges[i] = [ui, vi] 表示顶点 ui 和顶点 vi 之间的双向边。 每个顶点对由 最多一条 边连接，并且没有顶点存在与自身相连的边。
 * 请你确定是否存在从顶点 source 开始，到顶点 destination 结束的 有效路径 。
 * 给你数组 edges 和整数 n、source 和 destination，如果从 source 到 destination 存在 有效路径 ，则返回 true，否则返回 false 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/form-array-by-concatenating-subarrays-of-another-array/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import { UnionFindSet } from "../common/common";

// 方法1:深度优先遍历
function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    let paths = new Array(n).fill(0).map(() => new Array());
    // 划分路径连接
    for (let edge of edges) {
        paths[edge[0]].push(edge[1]);
        paths[edge[1]].push(edge[0]);
    }

    let visited = new Array(n).fill(false);
    return pathDfs(paths, visited, source, destination);
};

function pathDfs(paths: number[][], visited: boolean[], source: number, destination: number): boolean {
    if (source == destination) {
        return true;
    }

    visited[source] = true;

    for (let path of paths[source]) {
        if (visited[path]) {
            continue;
        }

        if (pathDfs(paths, visited, path, destination)) {
            return true;
        }
    }

    return false;
}

// 方法2:并查集
function validPath2(n: number, edges: number[][], source: number, destination: number): boolean {
    let set = new UnionFindSet(n);

    for (let edge of edges) {
        set.Merge(edge[0], edge[1]);
    }

    return set.Find(source) == set.Find(destination);
};

console.log(validPath(10, [[4, 3], [1, 4], [4, 8], [1, 7], [6, 4], [4, 2], [7, 4], [4, 0], [0, 9], [5, 4]], 5, 9))
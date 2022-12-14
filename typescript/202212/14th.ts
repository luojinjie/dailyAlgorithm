/**
 * 1697. 检查边长度限制的路径是否存在
 * 给你一个 n 个点组成的无向图边集 edgeList ，其中 edgeList[i] = [ui, vi, disi] 表示点 ui 和点 vi 之间有一条长度为 disi 的边。请注意，两个点之间可能有 超过一条边 。
 * 给你一个查询数组queries ，其中 queries[j] = [pj, qj, limitj] ，你的任务是对于每个查询 queries[j] ，判断是否存在从 pj 到 qj 的路径，且这条路径上的每一条边都 严格小于 limitj 。
 * 请你返回一个 布尔数组 answer ，其中 answer.length == queries.length ，当 queries[j] 的查询结果为 true 时， answer 第 j 个值为 true ，否则为 false 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/checking-existence-of-edge-length-limited-paths/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function distanceLimitedPathsExist(n: number, edgeList: number[][], queries: number[][]): boolean[] {
    // 边长从小到大排序
    edgeList.sort((a: number[], b: number[]) => a[2] - b[2]);
    // 限制从小到大排序(只排列索引,不改变查询数组顺序)
    let indexs = init(queries.length);
    indexs.sort((a: number, b: number) => queries[a][2] - queries[b][2]);

    // 初始化并查集
    let set = init(n);
    // 结果集
    let answer: boolean[] = new Array(queries.length).fill(false);
    let k = 0;
    for (let i of indexs) {
        // 合并满足限制条件的边长
        while (k < edgeList.length && edgeList[k][2] < queries[i][2]) {
            merge(set, edgeList[k][0], edgeList[k][1]);
            k++;
        }
        // 路径点在同一个并查集内则满足要求
        answer[i] = find(set, queries[i][0]) == find(set, queries[i][1]);
    }

    return answer;
};

// 初始化
function init(n: number) {
    let set = new Array(n);
    for (let i = 0; i < n; i++) {
        set[i] = i;
    }
    return set;
}

// 查找
function find(set: number[], index: number): number {
    if (set[index] == index) {
        return index;
    }
    return set[index] = find(set, set[index]);
}

// 合并
function merge(set: number[], left: number, right: number) {
    set[find(set, right)] = find(set, left);
}

console.log(distanceLimitedPathsExist(5, [[0, 1, 10], [1, 2, 5], [2, 3, 9], [3, 4, 13]], [[0, 4, 14], [1, 4, 13]]))
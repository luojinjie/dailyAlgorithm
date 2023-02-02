/**
 * 1129. 颜色交替的最短路径
 * 在一个有向图中，节点分别标记为 0, 1, ..., n-1。图中每条边为红色或者蓝色，且存在自环或平行边。
 * red_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的红色有向边。类似地，blue_edges 中的每一个 [i, j] 对表示从节点 i 到节点 j 的蓝色有向边。
 * 返回长度为 n 的数组 answer，其中 answer[X] 是从节点 0 到节点 X 的红色边和蓝色边交替出现的最短路径的长度。如果不存在这样的路径，那么 answer[x] = -1。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/shortest-path-with-alternating-colors/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function shortestAlternatingPaths(n: number, redEdges: number[][], blueEdges: number[][]): number[] {
    // 颜色分类
    let edges = new Array(2).fill(0).map(() => new Array(n).fill(0).map(() => new Array()));
    for (let edge of redEdges) {
        edges[0][edge[0]].push(edge[1]);
    }
    for (let edge of blueEdges) {
        edges[1][edge[0]].push(edge[1]);
    }

    // 假设:0红色,1蓝色

    // 距离存储:[最后交替的颜色,距离]
    let dist = new Array(2).fill(0).map(() => new Array(n).fill(Number.MAX_VALUE));
    dist[0][0] = 0; // 初始红色,从0开始
    dist[1][0] = 0; // 初始蓝色,从0开始

    // 队列存储:[起点,颜色];
    let queue = [];
    queue.push([0, 0]);
    queue.push([0, 1]);

    while (queue.length > 0) {
        let temp = queue.shift();
        let x = temp[0]; // x节点(起点)
        let c = temp[1]; // 颜色

        // 找到与x节点相连且颜色相反的y节点
        for (let y of edges[1 - c][x]) {
            // 过滤重复访问
            if (dist[1 - c][y] != Number.MAX_VALUE) {
                continue;
            }

            dist[1 - c][y] = dist[c][x] + 1;
            queue.push([y, 1 - c]);
        }
    }

    // 初始红色与蓝色整合最小值
    let answer = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        answer[i] = Math.min(dist[0][i], dist[1][i]);
        if (answer[i] == Number.MAX_VALUE) {
            answer[i] = -1;
        }
    }

    return answer;
};

console.log(shortestAlternatingPaths(4, [[0,1],[1,2]], [[2,3]]))
/**
 * 1326. 灌溉花园的最少水龙头数目
 * 在 x 轴上有一个一维的花园。花园长度为 n，从点 0 开始，到点 n 结束。
 * 花园里总共有 n + 1 个水龙头，分别位于 [0, 1, ..., n] 。
 * 给你一个整数 n 和一个长度为 n + 1 的整数数组 ranges ，其中 ranges[i] （下标从 0 开始）表示：如果打开点 i 处的水龙头，可以灌溉的区域为 [i -  ranges[i], i + ranges[i]] 。
 * 请你返回可以灌溉整个花园的 最少水龙头数目 。如果花园始终存在无法灌溉到的地方，请你返回 -1 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/minimum-number-of-taps-to-open-to-water-a-garden/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function minTaps(n: number, ranges: number[]): number {
    // 各个位置记录可抵达的最远位置
    let pos = new Array(n + 1).fill(0).map((_, i) => i);
    for (let i = 0; i < ranges.length; i++) {
        let start = Math.max(0, i - ranges[i]);
        let end = Math.min(n, i + ranges[i]);
        pos[start] = Math.max(pos[start], end);
    }

    let last = 0;
    let prev = 0;
    let min = 0;
    for (let i = 0; i < n; i++) {
        // 更新可抵达的最远位置
        last = Math.max(last, pos[i]);
        if (i == last) {
            return -1;
        }

        // 当前位置是上一次的最远位置时,更新数据
        if (i == prev) {
            min++;
            prev = last;
        }
    }

    return min;
};

console.log(minTaps(5, [3, 4, 1, 1, 0, 0]))
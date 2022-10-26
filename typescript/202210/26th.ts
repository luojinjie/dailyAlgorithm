/**
 * 862. 和至少为 K 的最短子数组
 * 给你一个整数数组 nums 和一个整数 k ，找出 nums 中和至少为 k 的 最短非空子数组 ，并返回该子数组的长度。如果不存在这样的 子数组 ，返回 -1 。
 * 子数组 是数组中 连续 的一部分。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function shortestSubarray(nums: number[], k: number): number {
    // 构建前缀和
    let prevSums = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
        prevSums[i + 1] = nums[i] + prevSums[i];
    }

    let queue = [0];
    let res = prevSums.length;
    let index = 0;
    for (let i = 1; i < prevSums.length; i++) {
        // 移动索引
        while (queue.length > 0 && prevSums[i] - prevSums[queue[index]] >= k) {
            res = Math.min(res, i - queue[index]);
            index++;
        }

        // 维护单调增队列
        while (queue.length > 0 && prevSums[queue[queue.length - 1]] >= prevSums[i]) {
            queue.pop();
        }

        queue.push(i);
    }

    return res != prevSums.length ? res : -1;
};

// N:如果都是正整数,可用滑动窗口

console.log(shortestSubarray([1, 2, 3, 4], 6))
/**
 * 1124. 表现良好的最长时间段
 * 给你一份工作时间表 hours，上面记录着某一位员工每天的工作小时数。
 * 我们认为当员工一天中的工作小时数大于 8 小时的时候，那么这一天就是「劳累的一天」。
 * 所谓「表现良好的时间段」，意味在这段时间内，「劳累的天数」是严格 大于「不劳累的天数」。
 * 请你返回「表现良好时间段」的最大长度。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/longest-well-performing-interval/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function longestWPI(hours: number[]): number {
    let n = hours.length;
    let stack = [0];

    // 构造前缀表
    let prev = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        prev[i + 1] = prev[i] + (hours[i] > 8 ? 1 : -1);
        if (prev[stack[stack.length - 1]] > prev[i + 1]) {
            // 记录单调递减数组元素的位置
            // N:给定一个r, 设 l < l1 < r, 若 prev[l] < prev[l1], 则 l1 与 r 组成的长度不可能最大
            stack.push(i + 1);
        }
    }

    let max = 0;
    for (let r = n; r > 0; r--) {
        while (stack.length && prev[stack[stack.length - 1]] < prev[r]) {
            max = Math.max(max, r - stack.pop())
        }
    }

    return max;
};

console.log(longestWPI([9, 9, 6, 0, 6, 6, 9]))
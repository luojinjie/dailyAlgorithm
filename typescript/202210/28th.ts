/**
 * 907. 子数组的最小值之和
 * 给定一个整数数组 arr，找到 min(b) 的总和，其中 b 的范围为 arr 的每个（连续）子数组。
 * 由于答案可能很大，因此 返回答案模 10^9 + 7 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/sum-of-subarray-minimums
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function sumSubarrayMins(arr: number[]): number {
    let sum = 0;
    let mod = 1e9 + 7;
    let stack = [-1]; // 方便做区间计算
    for (let i = 0; i <= arr.length; i++) {
        // 最后-1用作清空栈内元素计算总和
        let num = i < arr.length ? arr[i] : -1;
        // 维护单调栈
        while (stack.length > 1 && arr[stack[stack.length - 1]] >= num) {
            let j = stack.pop();
            // 左侧子数组个数 * 右侧子数组个数 = 总的子序列组合个数
            sum += arr[j] * (j - stack[stack.length - 1]) * (i - j);
        }

        stack.push(i);
    }

    return sum % mod;
};

console.log(sumSubarrayMins([11, 81, 94, 43, 3]))
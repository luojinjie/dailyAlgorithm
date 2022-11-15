/**
 * 805. 数组的均值分割
 * 给定你一个整数数组 nums
 * 我们要将 nums 数组中的每个元素移动到 A 数组 或者 B 数组中，使得 A 数组和 B 数组不为空，并且 average(A) == average(B) 。
 * 如果可以完成则返回true ， 否则返回 false  。
 * 注意：对于数组 arr ,  average(arr) 是 arr 的所有元素除以 arr 长度的和。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/split-array-with-same-average/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function splitArraySameAverage(nums: number[]): boolean {
    if (nums.length < 2) {
        return false;
    }

    let n = nums.length;
    let sum = 0;
    let middle = Math.floor(n / 2);
    let map = {};
    for (let num of nums) {
        sum += num;
    }

    // 乘以数组长度避免浮点数,减总数转换计算
    for (let i = 0; i < n; i++) {
        nums[i] = nums[i] * n - sum;
    }

    // 计算前半段
    let left = 1 << middle;
    for (let i = 1; i < left; i++) {
        let total = 0;
        for (let j = 0; j < middle; j++) {
            if ((i & (1 << j)) != 0) {
                total += nums[j];
            }
        }

        if (total == 0) {
            return true;
        }
        map[total] = 1;
    }

    let rSum = 0;
    for (let i = middle; i < n; i++) {
        rSum += nums[i];
    }

    // 计算后半段
    let right = 1 << (n - middle);
    for (let i = 1; i < right; i++) {
        let total = 0;
        for (let j = middle; j < n; j++) {
            if ((i & (1 << (j - middle))) != 0) {
                total += nums[j];
            }
        }

        if (total == 0 || (rSum != total && map[-total])) {
            return true;
        }
    }

    return false;
};

console.log(splitArraySameAverage([1, 2, 3, 4, 5]))
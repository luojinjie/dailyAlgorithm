/**
 * 775. 全局倒置与局部倒置
 * 给你一个长度为 n 的整数数组 nums ，表示由范围 [0, n - 1] 内所有整数组成的一个排列。
 * 全局倒置 的数目等于满足下述条件不同下标对 (i, j) 的数目：
 * 0 <= i < j < n
 * nums[i] > nums[j]
 * 
 * 局部倒置 的数目等于满足下述条件的下标 i 的数目：
 * 0 <= i < n - 1
 * nums[i] > nums[i + 1]
 * 当数组 nums 中 全局倒置 的数量等于 局部倒置 的数量时，返回 true ；否则，返回 false 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/global-and-local-inversions/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 方法1:局部倒置数量等于局部倒置数量,即无局部倒置
function isIdealPermutation(nums: number[]): boolean {
    let n = nums.length;
    let min = nums[n - 1];
    // 错开1位,判断是否存在局部倒置
    for (let i = n - 3; i >= 0; i--) {
        if (nums[i] > min) {
            return false;
        }

        min = Math.min(min, nums[i + 1]);
    }

    return true;
};

// 方法2:归纳证明
function isIdealPermutation2(nums: number[]): boolean {
    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i] - i) > 1) {
            return false;
        }
    }

    return true;
};

console.log(isIdealPermutation([1, 0, 3, 2, 4, 6, 5]))
console.log(isIdealPermutation2([1, 0, 3, 2, 4, 6, 5]));
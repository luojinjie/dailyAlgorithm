/**
 * 面试题 17.19. 消失的两个数字
 * 给定一个数组，包含从 1 到 N 所有的整数，但其中缺了两个数字。你能在 O(N) 时间内只用 O(1) 的空间找到它们吗？
 * 以任意顺序返回这两个数字均可。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/missing-two-lcci
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 方法1:求和
function missingTwo(nums: number[]): number[] {
    if (!nums || nums.length == 0) {
        return [1, 2];
    }

    let len = nums.length + 2; // 原始长度
    let sum = nums.reduce((prev: number, cur: number) => prev + cur); // 数组的和
    let sum2 = len * (len + 1) / 2 - sum; // 缺失数的和
    let range = Math.floor(sum2 / 2); // 划分范围(求2个数,1个在范围左侧,1个在范围右侧,求出左侧数,即可得出右侧数)
    let rangeSum = range * (range + 1) / 2; // 左侧范围的和

    // 减左侧现有的数,最后剩余的值就是左侧数
    for (let num of nums) {
        if (num <= range) {
            rangeSum -= num;
        }
    }

    return [rangeSum, sum2 - rangeSum];
};

// 方法2:异或
function missingTwoXOR(nums: number[]): number[] {
    if (!nums || nums.length == 0) {
        return [1, 2];
    }

    // 二次异或得到要求的2个数的异或值结果
    let xor = 0;
    for (let num of nums) {
        xor ^= num;
    }
    for (let i = 1; i <= nums.length + 2; i++) {
        xor ^= i;
    }

    // 异或相反数得到lowbit(最低位是1的值)
    // 由2个数异或结果可知,最低位为1说明其中1个数该位是0,另1个数该位是1
    // 分两类再次异或计算,可分别得出2个数
    let lowbit = xor & -xor;
    let one = 0;
    let two = 0;
    for (let num of nums) {
        if (num & lowbit) {
            one ^= num;
        } else {
            two ^= num;
        }
    }
    for (let i = 1; i <= nums.length + 2; i++) {
        if (i & lowbit) {
            one ^= i;
        } else {
            two ^= i;
        }
    }
    return [one, two];
}

// 修改数组前2个值返回
function missingTwoBySort(nums: number[]): number[] {
    if (!nums || nums.length == 0) {
        return [1, 2];
    }

    // N:排序不满足题目要求
    nums.sort((a: number, b: number) => a - b);

    let cur = 1;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        var temp = nums[i];
        while (temp != cur) {
            nums[count++] = cur++;
            if (count == 2) {
                return nums.slice(0, 2);
            }
        }
        cur++;
    }

    if (count < 2) {
        for (let i = 2 - count; i > 0; i--) {
            nums[count++] = cur++;
        }
    }

    return nums.slice(0, 2);
};

console.log(missingTwo([1, 2, 3, 4, 5, 7, 8, 9]))
console.log(missingTwoXOR([1, 2, 3, 4, 5, 7, 8, 9]))
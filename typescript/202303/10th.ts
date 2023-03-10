/**
 * 1590. 使数组和能被 P 整除
 * 给你一个正整数数组 nums，请你移除 最短 子数组（可以为 空），使得剩余元素的 和 能被 p 整除。 不允许 将整个数组都移除。
 * 请你返回你需要移除的最短子数组的长度，如果无法满足题目要求，返回 -1 。
 * 子数组 定义为原数组中连续的一组元素。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/make-sum-divisible-by-p/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function minSubarray(nums: number[], p: number): number {
    let n = nums.length;
    let mod = 0;
    // 前缀和余值
    for (let num of nums) {
        mod = (mod + num) % p
    }

    if (mod % p == 0) {
        return 0;
    }

    let res = n;
    let cur = 0;
    let map: Map<number, number> = new Map();
    map.set(0, -1);

    for (let i = 0; i < n; i++) {
        cur = (cur + nums[i]) % p; // 当前前缀和余值
        let target = (cur - mod + p) % p; // 同余定理得到target值,使得 cur % p == target % p
        if (map.has(target)) {
            res = Math.min(res, i - map.get(target));
        }

        // 记录出现位置(直接覆盖,取最后出现)
        map.set(cur, i);
    }

    return res == n ? - 1 : res;
};

console.log(minSubarray([8, 32, 31, 18, 34, 20, 21, 13, 1, 27, 23, 22, 11, 15, 30, 4, 2], 148));
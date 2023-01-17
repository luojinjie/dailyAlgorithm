/**
 * 1814. 统计一个数组中好对子的数目
 * 给你一个数组 nums ，数组中只包含非负整数。定义 rev(x) 的值为将整数 x 各个数字位反转得到的结果。比方说 rev(123) = 321 ， rev(120) = 21 。我们称满足下面条件的下标对 (i, j) 是 好的 ：
 * 0 <= i < j < nums.length
 * nums[i] + rev(nums[j]) == nums[j] + rev(nums[i])
 * 请你返回好下标对的数目。由于结果可能会很大，请将结果对 109 + 7 取余 后返回。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/count-nice-pairs-in-an-array/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function countNicePairs(nums: number[]): number {
    let mod = 1e9 + 7;
    let map: Map<number, number> = new Map();
    for (let num of nums) {
        // N:nums[i] 与 rev(nums[i]) 的差值等于 nums[j] 与 rev(nums[j]) 的差值即可满足条件
        let diff = reverse(num) - num;
        map.set(diff, (map.get(diff) || 0) + 1);
    }

    let count = 0;
    for (let items of map.entries()) {
        if (items[1] < 2) {
            continue;
        }

        count = (count + (items[1] * (items[1] - 1)) / 2) % mod;
    }

    return count;
};

function reverse(num: number): number {
    let res = 0;
    while (num > 0) {
        res = res * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return res;
}

console.log(countNicePairs([13, 10, 35, 24, 76]))
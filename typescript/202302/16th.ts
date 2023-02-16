/**
 * 2341. 数组能形成多少数对
 * 给你一个下标从 0 开始的整数数组 nums 。在一步操作中，你可以执行以下步骤：
 * 从 nums 选出 两个 相等的 整数
 * 从 nums 中移除这两个整数，形成一个 数对
 * 请你在 nums 上多次执行此操作直到无法继续执行。
 * 返回一个下标从 0 开始、长度为 2 的整数数组 answer 作为答案，其中 answer[0] 是形成的数对数目，answer[1] 是对 nums 尽可能执行上述操作后剩下的整数数目。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/maximum-number-of-pairs-in-array/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function numberOfPairs(nums: number[]): number[] {
    let res = new Array(2).fill(0);
    let map: Map<number, boolean> = new Map();
    for (let num of nums) {
        let temp = map.get(num) || false;
        map.set(num, !temp);
        if (temp) {
            res[0]++;
        }
    }
    res[1] = nums.length - res[0] * 2;

    return res;
};

console.log(numberOfPairs([1, 3, 2, 1, 3, 2, 2]))
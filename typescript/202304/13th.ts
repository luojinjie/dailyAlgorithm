/**
 * 2404. 出现最频繁的偶数元素
 * 给你一个整数数组 nums ，返回出现最频繁的偶数元素。
 * 如果存在多个满足条件的元素，只需要返回 最小 的一个。如果不存在这样的元素，返回 -1 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/most-frequent-even-element/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function mostFrequentEven(nums: number[]): number {
    let map: Map<number, number> = new Map();
    for (let num of nums) {
        if (num % 2 != 0) {
            continue;
        }
        map.set(num, (map.get(num) || 0) + 1);
    }

    let res = -1;
    let cnt = 0;
    for (let [key, val] of map.entries()) {
        if (cnt == 0 || val > cnt || (val == cnt && key < res)) {
            res = key;
            cnt = val;
        }
    }

    return res;
};

console.log(mostFrequentEven([4, 4, 4, 9, 2, 4]))
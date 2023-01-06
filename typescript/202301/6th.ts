/**
 * 2180. 统计各位数字之和为偶数的整数个数
 * 给你一个正整数 num ，请你统计并返回 小于或等于 num 且各位数字之和为 偶数 的正整数的数目。
 * 正整数的 各位数字之和 是其所有位上的对应数字相加的结果。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/count-integers-with-even-digit-sum
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 方法1:暴力
function countEven(num: number): number {
    let count = 0;
    for (let i = 1; i <= num; i++) {
        let sum = 0;
        let j = i;
        while (j) {
            sum += j % 10;
            j = Math.floor(j / 10);
        }

        if (sum % 2 == 0) {
            count++;
        }
    }

    return count;
};

// 方法2:数学
function countEven2(num: number): number {
    // 每10个数分1组
    let groups = Math.floor(num / 10);
    // 每10个数必定有5个奇数(1,3,5,7,9)和5个偶数(0,2,4,6,8)
    let count = groups * 5;

    let sum = 0;
    while (groups) {
        sum += groups % 10;
        groups = Math.floor(groups / 10);
    }

    // N: 0 ≤ x ≤ 9, [0,x]区间内的奇数个数: Math.floor(((num % 10) + 1) / 2), 偶数个数: Math.floor(((num % 10) + 2) / 2)

    if (sum % 2 == 0) { // 偶数个分数,个位取偶数
        count += Math.floor(((num % 10) + 2) / 2);
    } else { // 奇数个分组,个位取奇数
        count += Math.floor(((num % 10) + 1) / 2);
    }

    // num从1开始,多算1个0
    return count - 1;
};

console.log(countEven2(41))
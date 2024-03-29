/**
 * 2335. 装满杯子需要的最短总时长
 * 现有一台饮水机，可以制备冷水、温水和热水。每秒钟，可以装满 2 杯 不同 类型的水或者 1 杯任意类型的水。
 * 给你一个下标从 0 开始、长度为 3 的整数数组 amount ，其中 amount[0]、amount[1] 和 amount[2] 分别表示需要装满冷水、温水和热水的杯子数量。返回装满所有杯子所需的 最少 秒数。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/minimum-amount-of-time-to-fill-cups/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function fillCups(amount: number[]): number {
    amount.sort((a: number, b: number) => a - b);
    if (amount[0] + amount[1] <= amount[2]) {
        return amount[2];
    }

    return Math.floor((amount[0] + amount[1] + amount[2] + 1) / 2);
};

console.log(fillCups([5, 4, 4]))
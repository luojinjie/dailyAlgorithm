"use strict";
/**
 * 1825. 求出 MK 平均值
 * 给你两个整数 m 和 k ，以及数据流形式的若干整数。你需要实现一个数据结构，计算这个数据流的 MK 平均值 。
 * MK 平均值 按照如下步骤计算：
 * 如果数据流中的整数少于 m 个，MK 平均值 为 -1 ，否则将数据流中最后 m 个元素拷贝到一个独立的容器中。
 * 从这个容器中删除最小的 k 个数和最大的 k 个数。
 * 计算剩余元素的平均值，并 向下取整到最近的整数 。
 * 请你实现 MKAverage 类：
 * MKAverage(int m, int k) 用一个空的数据流和两个整数 m 和 k 初始化 MKAverage 对象。
 * void addElement(int num) 往数据流中插入一个新的元素 num 。
 * int calculateMKAverage() 对当前的数据流计算并返回 MK 平均数 ，结果需 向下取整到最近的整数 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/finding-mk-average/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
class MKAverage {
    constructor(m, k) {
        this.m = 0;
        this.k = 0;
        this.queue = [];
        this.orderL = [];
        this.orderM = [];
        this.orderR = [];
        this.m = m;
        this.k = k;
    }
    addElement(num) {
        this.queue.push(num);
        if (this.queue.length < this.m) {
            insert(this.orderM, num);
        }
        else if (this.queue.length == this.m) { // 将m个数拆分到3个有序集合中
            insert(this.orderM, num);
            this.orderL = this.orderM.splice(0, this.k);
            this.orderR = this.orderM.splice(this.orderM.length - this.k);
        }
        else {
            // 插入新值
            let maxL = Math.max.apply(null, this.orderL);
            let minR = Math.min.apply(null, this.orderR);
            if (num < maxL) { // 比左侧最大值小,插入到左侧集合,将最大值插入中间集合
                insert(this.orderL, num);
                insert(this.orderM, this.orderL.splice(this.orderL.indexOf(maxL), 1)[0]);
            }
            else if (num > minR) { // 比右侧最小值大,插入到右侧集合,将最小值插入中间集合
                insert(this.orderR, num);
                insert(this.orderM, this.orderR.splice(this.orderR.indexOf(minR), 1)[0]);
            }
            else {
                insert(this.orderM, num);
            }
            // 移除旧值
            let ele = this.queue.shift();
            if (this.orderL.indexOf(ele) != -1) { // 旧值从左侧移除
                this.orderL.splice(this.orderL.indexOf(ele), 1);
                insert(this.orderL, this.orderM.shift());
            }
            else if (this.orderM.indexOf(ele) != -1) { // 旧值从中间移除
                this.orderM.splice(this.orderM.indexOf(ele), 1);
            }
            else { // 旧值从右侧移除
                this.orderR.splice(this.orderR.indexOf(ele), 1);
                insert(this.orderR, this.orderM.pop());
            }
        }
    }
    calculateMKAverage() {
        if (this.queue.length < this.m) {
            return -1;
        }
        let sum = this.orderM.reduce((prev, cur) => prev + cur);
        return Math.floor(sum / (this.m - this.k * 2));
    }
}
// 插入数值(按顺序)
function insert(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let pos = arr.length;
    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        if (arr[middle] < num) {
            left = middle + 1;
        }
        else {
            right = middle - 1;
            pos = middle;
        }
    }
    arr.splice(pos, 0, num);
}
/**
 * Your MKAverage object will be instantiated and called as such:
 * var obj = new MKAverage(m, k)
 * obj.addElement(num)
 * var param_2 = obj.calculateMKAverage()
 */
[[3, 1], [17612], [74607], [], [8272], [33433], [], [15456], [64938], [], [99741]];
let MKTest = new MKAverage(3, 1);
MKTest.addElement(17612);
MKTest.addElement(74607);
console.log(MKTest.calculateMKAverage());
MKTest.addElement(8272);
MKTest.addElement(33433);
console.log(MKTest.calculateMKAverage());
MKTest.addElement(15456);
MKTest.addElement(64938);
console.log(MKTest.calculateMKAverage());
MKTest.addElement(99741);
// console.log(MKTest.calculateMKAverage());
//# sourceMappingURL=18th.js.map
/**
 * 895. 最大频率栈
 * 设计一个类似堆栈的数据结构，将元素推入堆栈，并从堆栈中弹出出现频率最高的元素。
 * 实现 FreqStack 类:
 * FreqStack() 构造一个空的堆栈。
 * void push(int val) 将一个整数 val 压入栈顶。
 * int pop() 删除并返回堆栈中出现频率最高的元素。
 * 如果出现频率最高的元素不只一个，则移除并返回最接近栈顶的元素。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/maximum-frequency-stack/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
class FreqStack {
    cntMap: Map<number, number> = new Map(); // 计数哈希表
    freqMap: Map<number, number[]> = new Map(); // 频率哈希表 例:5,7,5,7,5,4 => { 1:[5,7,4], 2:[5,7], 3:[5] }
    maxFreq: number = 0;

    constructor() {

    }

    push(val: number): void {
        if (!this.cntMap.has(val)) {
            this.cntMap.set(val, 0);
        }
        this.cntMap.set(val, this.cntMap.get(val) + 1);

        let count = this.cntMap.get(val);
        if (!this.freqMap.has(count)) {
            this.freqMap.set(count, []);
        }

        this.freqMap.get(count).push(val);
        this.maxFreq = Math.max(this.maxFreq, count);
    }

    pop(): number {
        let list = this.freqMap.get(this.maxFreq);
        let target = list.pop();
        this.cntMap.set(target, this.cntMap.get(target) - 1);

        if (list.length == 0) {
            this.maxFreq--;
        }
        return target;
    }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
var obj = new FreqStack()
obj.push(4);
obj.push(0);
obj.push(9);
obj.push(3);
obj.push(4);
obj.push(2);
console.log(obj.pop())
obj.push(6);
console.log(obj.pop())
obj.push(1);
console.log(obj.pop())
obj.push(1);
console.log(obj.pop())
obj.push(4);
console.log(obj.pop())
console.log(obj.pop())
console.log(obj.pop())
console.log(obj.pop())
console.log(obj.pop())
console.log(obj.pop())
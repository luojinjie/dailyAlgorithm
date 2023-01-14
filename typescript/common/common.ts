/**
 * 链表节点
 */
export class ListNode {
    public val: number = null;
    public next: ListNode = null;

    constructor(v?: number, n?: ListNode) {
        this.val = v;
        this.next = n;
    }
}

/**
 * 并查集
 */
export class UnionFindSet {
    private set: number[] = null;

    // 构造函数
    constructor(n: number) {
        this.set = new Array(n);
        for (let i = 0; i < n; i++) {
            this.set[i] = i;
        }
    }

    // 查找
    public Find(index: number): number {
        if (this.set[index] == index) {
            return index;
        }
        return this.set[index] = this.Find(this.set[index]);
    }

    // 合并
    public Merge(left: number, right: number) {
        this.set[this.Find(right)] = this.Find(left);
    }
}

/**
 * 是否数字字符串
 * @param s 字符串
 * @returns 是否数字字符串
 */
export function isDigit(s: string) {
    return s >= "0" && s <= "9";
}

/**
 * 最大公约数
 * @param a 数值1
 * @param b 数值2
 * @returns 最大公约数
 */
export function gcd(a: number, b: number) {
    return b == 0 ? a : gcd(b, a % b);
}

/**
 * 最小公倍数
 * @param a 数值1
 * @param b 数值2
 * @returns 最小公倍数
 */
export function lcm(a: number, b: number) {
    return a * b / gcd(a, b);
}
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lcm = exports.gcd = exports.isLetter = exports.isDigit = exports.UnionFindSet = exports.TreeNode = exports.ListNode = void 0;
/**
 * 链表节点
 */
class ListNode {
    constructor(v, n) {
        this.val = null;
        this.next = null;
        this.val = v;
        this.next = n;
    }
}
exports.ListNode = ListNode;
/**
 * 二叉树节点
 */
class TreeNode {
    constructor(v, l, r) {
        this.val = null;
        this.left = null;
        this.right = null;
        this.val = v;
        this.left = l;
        this.right = r;
    }
}
exports.TreeNode = TreeNode;
/**
 * 并查集
 */
class UnionFindSet {
    // 构造函数
    constructor(n) {
        this.set = null;
        this.set = new Array(n);
        for (let i = 0; i < n; i++) {
            this.set[i] = i;
        }
    }
    // 查找
    Find(index) {
        if (this.set[index] == index) {
            return index;
        }
        return this.set[index] = this.Find(this.set[index]);
    }
    // 合并
    Merge(left, right) {
        this.set[this.Find(right)] = this.Find(left);
    }
}
exports.UnionFindSet = UnionFindSet;
/**
 * 是否数字字符串
 * @param s 字符串
 * @returns 是否数字字符串
 */
function isDigit(s) {
    return s >= "0" && s <= "9";
}
exports.isDigit = isDigit;
/**
 * 是否字母字符串
 * @param s 字符串
 * @returns 是否字母字符串
 */
function isLetter(s) {
    return (s >= "a" && s <= "z") || (s >= "A" && s <= "Z");
}
exports.isLetter = isLetter;
/**
 * 最大公约数
 * @param a 数值1
 * @param b 数值2
 * @returns 最大公约数
 */
function gcd(a, b) {
    return b == 0 ? a : gcd(b, a % b);
}
exports.gcd = gcd;
/**
 * 最小公倍数
 * @param a 数值1
 * @param b 数值2
 * @returns 最小公倍数
 */
function lcm(a, b) {
    return a * b / gcd(a, b);
}
exports.lcm = lcm;
//# sourceMappingURL=common.js.map
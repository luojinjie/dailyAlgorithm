"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDigit = exports.UnionFindSet = exports.ListNode = void 0;
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
//# sourceMappingURL=common.js.map
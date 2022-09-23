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
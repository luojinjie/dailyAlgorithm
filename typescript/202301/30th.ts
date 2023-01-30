/**
 * 1669. 合并两个链表
 * 给你两个链表 list1 和 list2 ，它们包含的元素分别为 n 个和 m 个。
 * 请你将 list1 中下标从 a 到 b 的全部节点都删除，并将list2 接在被删除节点的位置。
 * 请你返回结果链表的头指针。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/merge-in-between-linked-lists/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import { ListNode } from "../common/common";

function mergeInBetween(list1: ListNode | null, a: number, b: number, list2: ListNode | null): ListNode | null {
    let nodeA: ListNode = null;
    let nodeB: ListNode = null;
    let temp = list1;
    let i = 0;
    while (temp) {
        // 删除下标a需要找到a的上一个节点
        if (i == a - 1) {
            nodeA = temp;
        }

        i++;
        temp = temp.next;

        // 删除下标b需要找到b的下一个节点
        if (i == b + 1) {
            nodeB = temp;
            break;
        }
    }

    // 不允许nodeA为空,允许nodeB为空
    if (!nodeA) {
        return null;
    }

    nodeA.next = list2;

    temp = list2;
    while (temp.next) {
        temp = temp.next;
    }
    temp.next = nodeB;

    return list1;
};

// 输入：list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]

let list1 = new ListNode(0, new ListNode(1, new ListNode(2)));
let list2 = new ListNode(1000000, new ListNode(1000001, new ListNode(1000002, new ListNode(1000003))));

console.log(mergeInBetween(list1, 1, 1, list2));
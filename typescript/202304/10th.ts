/**
 * 1019. 链表中的下一个更大节点
 * 给定一个长度为 n 的链表 head
 * 对于列表中的每个节点，查找下一个 更大节点 的值。也就是说，对于每个节点，找到它旁边的第一个节点的值，这个节点的值 严格大于 它的值。
 * 返回一个整数数组 answer ，其中 answer[i] 是第 i 个节点( 从1开始 )的下一个更大的节点的值。如果第 i 个节点没有下一个更大的节点，设置 answer[i] = 0 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/next-greater-node-in-linked-list/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import { ListNode } from "../common/common";

function nextLargerNodes(head: ListNode | null): number[] {
    let ans = [];
    let stack = [];
    let index = 0;
    while (head) {
        // 记录默认值
        ans[index] = head.val;

        // 维护单调栈
        while (stack.length > 0 && head.val > ans[stack[stack.length - 1]]) {
            ans[stack.pop()] = head.val;
        }
        stack.push(index);
        head = head.next
        index++;
    }

    // 清空栈
    for (let i = 0; i < stack.length; i++) {
        ans[stack[i]] = 0;
    }

    return ans;
};

let node = new ListNode(2, new ListNode(1, new ListNode(5, null)))
console.log(nextLargerNodes(node))
"use strict";
/**
 * 2331. 计算布尔二叉树的值
 * 给你一棵 完整二叉树 的根，这棵树有以下特征：
 * 叶子节点 要么值为 0 要么值为 1 ，其中 0 表示 False ，1 表示 True 。
 * 非叶子节点 要么值为 2 要么值为 3 ，其中 2 表示逻辑或 OR ，3 表示逻辑与 AND 。
 * 计算 一个节点的值方式如下：
 * 如果节点是个叶子节点，那么节点的 值 为它本身，即 True 或者 False 。
 * 否则，计算 两个孩子的节点值，然后将该节点的运算符对两个孩子值进行 运算 。
 * 返回根节点 root 的布尔运算值。
 * 完整二叉树 是每个节点有 0 个或者 2 个孩子的二叉树。
 * 叶子节点 是没有孩子的节点。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/evaluate-boolean-binary-tree/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common/common");
function evaluateTree(root) {
    if (root.val == 2) {
        return evaluateTree(root.left) || evaluateTree(root.right);
    }
    if (root.val == 3) {
        return evaluateTree(root.left) && evaluateTree(root.right);
    }
    return root.val == 1;
}
;
// [2,1,3,null,null,0,1]
let node = new common_1.TreeNode(2, new common_1.TreeNode(1), new common_1.TreeNode(3, new common_1.TreeNode(0), new common_1.TreeNode(1)));
console.log(evaluateTree(node));
//# sourceMappingURL=6th.js.map
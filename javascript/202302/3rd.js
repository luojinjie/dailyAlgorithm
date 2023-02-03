"use strict";
/**
 * 1145. 二叉树着色游戏
 * 有两位极客玩家参与了一场「二叉树着色」的游戏。游戏中，给出二叉树的根节点 root，树上总共有 n 个节点，且 n 为奇数，其中每个节点上的值从 1 到 n 各不相同。
 * 最开始时：
 * 「一号」玩家从 [1, n] 中取一个值 x（1 <= x <= n）；
 * 「二号」玩家也从 [1, n] 中取一个值 y（1 <= y <= n）且 y != x。
 * 「一号」玩家给值为 x 的节点染上红色，而「二号」玩家给值为 y 的节点染上蓝色。
 * 之后两位玩家轮流进行操作，「一号」玩家先手。每一回合，玩家选择一个被他染过色的节点，将所选节点一个 未着色 的邻节点（即左右子节点、或父节点）进行染色（「一号」玩家染红色，「二号」玩家染蓝色）。
 * 如果（且仅在此种情况下）当前玩家无法找到这样的节点来染色时，其回合就会被跳过。
 * 若两个玩家都没有可以染色的节点时，游戏结束。着色节点最多的那位玩家获得胜利 ✌️。
 * 现在，假设你是「二号」玩家，根据所给出的输入，假如存在一个 y 值可以确保你赢得这场游戏，则返回 true ；若无法获胜，就请返回 false 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/binary-tree-coloring-game/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common/common");
function btreeGameWinningMove(root, n, x) {
    let target = null;
    let find = (node, x) => {
        if (!node || target) {
            return;
        }
        if (node.val == x) {
            target = node;
            return;
        }
        find(node.left, x);
        find(node.right, x);
    };
    // 查找一号玩家选择的节点x
    find(root, x);
    // 获取父、左、右节点数量
    let leftCnt = getChildCnt(target.left);
    let rightCnt = getChildCnt(target.right);
    let parentCnt = n - 1 - leftCnt - rightCnt; // 减1是一号玩家选择的节点
    // 父、左、右节点当中的最大值 ≥ 全部节点的半数以上才可以获胜
    return Math.max(leftCnt, rightCnt, parentCnt) >= Math.floor((n + 1) / 2);
}
;
// 获取子节点数量
function getChildCnt(node) {
    if (!node) {
        return 0;
    }
    return 1 + getChildCnt(node.left) + getChildCnt(node.right);
}
let root = new common_1.TreeNode(1, new common_1.TreeNode(2, new common_1.TreeNode(4, new common_1.TreeNode(8), new common_1.TreeNode(9)), new common_1.TreeNode(5, new common_1.TreeNode(10), new common_1.TreeNode(11))), new common_1.TreeNode(3, new common_1.TreeNode(6), new common_1.TreeNode(7)));
console.log(btreeGameWinningMove(root, 11, 2));
//# sourceMappingURL=3rd.js.map
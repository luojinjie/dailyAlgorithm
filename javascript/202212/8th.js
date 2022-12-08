"use strict";
/**
 * 1812. 判断国际象棋棋盘中一个格子的颜色
 * 给你一个坐标 coordinates ，它是一个字符串，表示国际象棋棋盘中一个格子的坐标。下图是国际象棋棋盘示意图。
 * 如果所给格子的颜色是白色，请你返回 true，如果是黑色，请返回 false 。
 * 给定坐标一定代表国际象棋棋盘上一个存在的格子。坐标第一个字符是字母，第二个字符是数字。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/determine-color-of-a-chessboard-square/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function squareIsWhite(coordinates) {
    let codeA = "a".charCodeAt(0);
    let code1 = "1".charCodeAt(0);
    let letter = coordinates.charCodeAt(0) - codeA;
    let num = coordinates.charCodeAt(1) - code1;
    // 相加为奇数的坐标是白色
    return (letter + num) % 2 != 0;
}
;
console.log(squareIsWhite("a1"));
//# sourceMappingURL=8th.js.map
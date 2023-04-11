"use strict";
/**
 * 1041. 困于环中的机器人
 * 在无限的平面上，机器人最初位于 (0, 0) 处，面朝北方。注意:
 * 北方向 是y轴的正方向。
 * 南方向 是y轴的负方向。
 * 东方向 是x轴的正方向。
 * 西方向 是x轴的负方向。
 *
 * 机器人可以接受下列三条指令之一：
 * "G"：直走 1 个单位
 * "L"：左转 90 度
 * "R"：右转 90 度
 *
 * 机器人按顺序执行指令 instructions，并一直重复它们。
 * 只有在平面中存在环使得机器人永远无法离开时，返回 true。否则，返回 false。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/robot-bounded-in-circle/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function isRobotBounded(instructions) {
    let n = instructions.length;
    let direction = [[0, 1], [-1, 0], [0, -1], [1, 0]];
    let curIdx = 0;
    let x = 0;
    let y = 0;
    // 模拟移动
    for (let i = 0; i < n; i++) {
        if (instructions[i] == "G") {
            x += direction[curIdx][0];
            y += direction[curIdx][1];
        }
        else if (instructions[i] == "L") {
            curIdx = (curIdx + 1) % 4;
        }
        else {
            curIdx = (curIdx + 3) % 4;
        }
    }
    // 通过观察得出执行指令后机器人仍在原点或者方向与初始方向不同时,会形成环
    return (x == 0 && y == 0) || curIdx != 0;
}
;
console.log(isRobotBounded("GL"));
//# sourceMappingURL=11th.js.map
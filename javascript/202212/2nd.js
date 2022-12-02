"use strict";
/**
 * 1769. 移动所有球到每个盒子所需的最小操作数
 * 有 n 个盒子。给你一个长度为 n 的二进制字符串 boxes ，其中 boxes[i] 的值为 '0' 表示第 i 个盒子是 空 的，而 boxes[i] 的值为 '1' 表示盒子里有 一个 小球。
 * 在一步操作中，你可以将 一个 小球从某个盒子移动到一个与之相邻的盒子中。第 i 个盒子和第 j 个盒子相邻需满足 abs(i - j) == 1 。注意，操作执行后，某些盒子中可能会存在不止一个小球。
 * 返回一个长度为 n 的数组 answer ，其中 answer[i] 是将所有小球移动到第 i 个盒子所需的 最小 操作数。
 * 每个 answer[i] 都需要根据盒子的 初始状态 进行计算。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
// 方法1:双重循环
function minOperations2(boxes) {
    let step = new Array(boxes.length);
    for (let i = 0; i < boxes.length; i++) {
        let count = 0;
        for (let j = 0; j < boxes.length; j++) {
            if (boxes[j] == "1") {
                count += Math.abs(i - j);
            }
        }
        step[i] = count;
    }
    return step;
}
;
// 方法2:根据前一个盒子操作数得出当前盒子操作数
function minOperations3(boxes) {
    let step = new Array(boxes.length).fill(0);
    let left = boxes[0] == "1" ? 1 : 0;
    let right = 0;
    for (let i = 1; i < boxes.length; i++) {
        if (boxes[i] == "1") {
            right++;
            step[0] += i;
        }
    }
    for (let i = 1; i < boxes.length; i++) {
        step[i] = step[i - 1] + left - right;
        if (boxes[i] == "1") {
            left++;
            right--;
        }
    }
    return step;
}
;
console.log(minOperations3("001011"));
/**
 * 输入：boxes = "001011"
 * 输出：[11,8,5,4,3,4]
 */ 
//# sourceMappingURL=2nd.js.map
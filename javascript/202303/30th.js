"use strict";
/**
 * 1637. 两点之间不包含任何点的最宽垂直区域
 * 给你 n 个二维平面上的点 points ，其中 points[i] = [xi, yi] ，请你返回两点之间内部不包含任何点的 最宽垂直区域 的宽度。
 * 垂直区域 的定义是固定宽度，而 y 轴上无限延伸的一块区域（也就是高度为无穷大）。 最宽垂直区域 为宽度最大的一个垂直区域。
 * 请注意，垂直区域 边上 的点 不在 区域内。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/widest-vertical-area-between-two-points-containing-no-points/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function maxWidthOfVerticalArea(points) {
    let max = 0;
    // 以x轴排序(求的是最宽区域)
    points.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < points.length; i++) {
        max = Math.max(max, points[i][0] - points[i - 1][0]);
    }
    return max;
}
;
console.log(maxWidthOfVerticalArea([[3, 1], [9, 0], [1, 0], [1, 4], [5, 3], [8, 8]]));
//# sourceMappingURL=30th.js.map
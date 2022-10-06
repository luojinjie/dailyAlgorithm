"use strict";
/**
 * 927. 三等分
 * 给定一个由 0 和 1 组成的数组 arr ，将数组分成  3 个非空的部分 ，使得所有这些部分表示相同的二进制值。
 * 如果可以做到，请返回任何 [i, j]，其中 i+1 < j，这样一来：
 * arr[0], arr[1], ..., arr[i] 为第一部分；
 * arr[i + 1], arr[i + 2], ..., arr[j - 1] 为第二部分；
 * arr[j], arr[j + 1], ..., arr[arr.length - 1] 为第三部分。
 * 这三个部分所表示的二进制值相等。
 * 如果无法做到，就返回 [-1, -1]。
 * 注意，在考虑每个部分所表示的二进制时，应当将其看作一个整体。例如，[1,1,0] 表示十进制中的 6，而不会是 3。此外，前导零也是被允许的，所以 [0,1,1] 和 [1,1] 表示相同的值。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/three-equal-parts
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function threeEqualParts(arr) {
    if (!arr || arr.length < 3) {
        return [-1, -1];
    }
    let oneCnt = 0;
    for (let num of arr) {
        if (num == 1) {
            oneCnt++;
        }
    }
    // 1的数量必须是3的倍数
    if (oneCnt % 3 != 0) {
        return [-1, -1];
    }
    // 全部是0,直接切割
    if (oneCnt == 0) {
        return [0, 2];
    }
    // 找出3个部分中每部分首次出现的1
    let oneNum = oneCnt / 3;
    let first = 0, second = 0, third = 0, cur = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 1) {
            if (cur == 0) {
                first = i;
            }
            else if (cur == oneNum) {
                second = i;
            }
            else if (cur == oneNum * 2) {
                third = i;
            }
            cur++;
        }
    }
    // 第3部分从首次出现1的位置到结尾,得到完整的二进制数据的长度
    // 判断前2个部分是否长度有跨越到其他部分的长度
    let tailLen = arr.length - third;
    if (first + tailLen > second || second + tailLen > third) {
        return [-1, -1];
    }
    // 比较每部分每个位置的值
    for (let i = 1; i < tailLen; i++) {
        if (arr[first + i] != arr[second + i] || arr[first + i] != arr[third + i]) {
            return [-1, -1];
        }
    }
    return [first + tailLen - 1, second + tailLen];
}
;
console.log(threeEqualParts([1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0]));
//# sourceMappingURL=6th.js.map
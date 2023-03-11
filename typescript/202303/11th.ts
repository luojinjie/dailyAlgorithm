/**
 * 面试题 17.05. 字母与数字
 * 给定一个放有字母和数字的数组，找到最长的子数组，且包含的字母和数字的个数相同。
 * 返回该子数组，若存在多个最长子数组，返回左端点下标值最小的子数组。若不存在这样的数组，返回一个空数组。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/find-longest-subarray-lcci/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

import { isLetter } from "../common/common";

function findLongestSubarray(array: string[]): string[] {
    let n = array.length;

    // 前缀和(字母-数字)
    let prev = new Array(n + 1).fill(0);
    for (let i = 0; i < n; i++) {
        if (isLetter(array[i])) {
            prev[i + 1] = prev[i] + 1;
        } else {
            prev[i + 1] = prev[i] - 1;
        }
    }

    let start = 0; // 起始索引
    let max = 0; // 最长子数组长度
    let map: Map<number, number> = new Map();
    for (let i = 0; i < prev.length; i++) {
        if (map.has(prev[i])) {
            if (i - map.get(prev[i]) > max) {
                max = i - map.get(prev[i]);
                start = map.get(prev[i]);
            }
            continue;
        }

        // 记录首次出现的位置
        map.set(prev[i], i);
    }

    return max == 0 ? [] : array.slice(start, start + max);
};

console.log(findLongestSubarray(["42", "10", "O", "t", "y", "p", "g", "B", "96", "H", "5", "v", "P", "52", "25", "96", "b", "L", "Y", "z", "d", "52", "3", "v", "71", "J", "A", "0", "v", "51", "E", "k", "H", "96", "21", "W", "59", "I", "V", "s", "59", "w", "X", "33", "29", "H", "32", "51", "f", "i", "58", "56", "66", "90", "F", "10", "93", "53", "85", "28", "78", "d", "67", "81", "T", "K", "S", "l", "L", "Z", "j", "5", "R", "b", "44", "R", "h", "B", "30", "63", "z", "75", "60", "m", "61", "a", "5", "S", "Z", "D", "2", "A", "W", "k", "84", "44", "96", "96", "y", "M"]))
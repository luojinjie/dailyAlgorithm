/**
 * 1053. 交换一次的先前排列
 * 给你一个正整数数组 arr（可能存在重复的元素），请你返回可在 一次交换（交换两数字 arr[i] 和 arr[j] 的位置）后得到的、按字典序排列小于 arr 的最大排列。
 * 如果无法这么操作，就请返回原数组。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/previous-permutation-with-one-swap/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function prevPermOpt1(arr: number[]): number[] {
    let n = arr.length;

    // 字典序排列下, 从后往前遍历, 非递减的第一个元素满足条件(贪心)
    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            let j = n - 1;
            // 找到第一个小于 arr[i] 的数, 由于可能存在重复的元素, 通过 arr[j] == arr[j - 1] 继续往前位移
            while (arr[j] >= arr[i] || arr[j] == arr[j - 1]) {
                j--;
            }
            [arr[i], arr[j]] = [arr[j], arr[i]];
            break;
        }
    }

    return arr;
};

console.log(prevPermOpt1([1, 7, 4, 6, 7, 9]))
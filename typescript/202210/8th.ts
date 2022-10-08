/**
 * 870. 优势洗牌
 * 给定两个大小相等的数组 nums1 和 nums2，nums1 相对于 nums 的优势可以用满足 nums1[i] > nums2[i] 的索引 i 的数目来描述。
 * 返回 nums1 的任意排列，使其相对于 nums2 的优势最大化。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/advantage-shuffle
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function advantageCount(nums1: number[], nums2: number[]): number[] {
    if (!nums1 || !nums2 || nums1.length != nums2.length) {
        return [];
    }

    // num2下标排序
    let idxs = new Array(nums2.length).fill(0);
    idxs.map((_: number, idx: number, arr: number[]) => arr[idx] = idx);
    idxs.sort((a: number, b: number) => nums2[a] - nums2[b]);
    // num1排序
    nums1.sort((a: number, b: number) => a - b);

    let start = 0;
    let end = nums2.length - 1;
    for (let i = 0; i < nums1.length; i++) {
        // num1当前最小值大于num2当前最小值可取得优势
        if (nums1[i] > nums2[idxs[start]]) {
            nums2[idxs[start++]] = nums1[i];
        } else { // 小于等于,以num1当前最小值去与num2当前最大值去比(弃子)
            nums2[idxs[end--]] = nums1[i];
        }
    }

    return nums2;
};

console.log(advantageCount([2, 7, 11, 15], [1, 10, 4, 11]));
console.log(advantageCount([12, 24, 8, 32], [13, 25, 32, 11]));
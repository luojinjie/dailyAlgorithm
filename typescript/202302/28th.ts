/**
 * 2363. 合并相似的物品
 * 给你两个二维整数数组 items1 和 items2 ，表示两个物品集合。每个数组 items 有以下特质：
 * items[i] = [valuei, weighti] 其中 valuei 表示第 i 件物品的 价值 ，weighti 表示第 i 件物品的 重量 。
 * items 中每件物品的价值都是 唯一的 。
 * 请你返回一个二维数组 ret，其中 ret[i] = [valuei, weighti]， weighti 是所有价值为 valuei 物品的 重量之和 。
 * 注意：ret 应该按价值 升序 排序后返回。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/merge-similar-items/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
    let map = new Map();
    for (let items of items1) {
        map.set(items[0], (map.get(items[0]) || 0) + items[1])
    }
    for (let items of items2) {
        map.set(items[0], (map.get(items[0]) || 0) + items[1])
    }

    let ret = Array.from(map);
    ret.sort((a: number[], b: number[]) => a[0] - b[0]);

    return ret;
};

console.log(mergeSimilarItems([[1, 1], [3, 2], [2, 3]], [[2, 1], [3, 2], [1, 3]]))
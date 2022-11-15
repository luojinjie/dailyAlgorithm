/**
 * 1710. 卡车上的最大单元数
 * 请你将一些箱子装在 一辆卡车 上。给你一个二维数组 boxTypes ，其中 boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi] ：
 * numberOfBoxesi 是类型 i 的箱子的数量。
 * numberOfUnitsPerBoxi 是类型 i 每个箱子可以装载的单元数量。
 * 整数 truckSize 表示卡车上可以装载 箱子 的 最大数量 。只要箱子数量不超过 truckSize ，你就可以选择任意箱子装到卡车上。
 * 返回卡车可以装载 单元 的 最大 总数。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/maximum-units-on-a-truck/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function maximumUnits(boxTypes: number[][], truckSize: number): number {
    boxTypes.sort((a: number[], b: number[]) => b[1] - a[1]);

    let max = 0;
    for (let box of boxTypes) {
        let size = truckSize > box[0] ? box[0] : truckSize;
        max += size * box[1];
        truckSize -= size;

        if (truckSize == 0) {
            break;
        }
    }

    return max;
};

console.log(maximumUnits([[5, 10], [2, 5], [4, 7], [3, 9]], 10));
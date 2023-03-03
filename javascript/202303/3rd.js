"use strict";
/**
 * 1487. 保证文件名唯一
 * 给你一个长度为 n 的字符串数组 names 。你将会在文件系统中创建 n 个文件夹：在第 i 分钟，新建名为 names[i] 的文件夹。
 * 由于两个文件 不能 共享相同的文件名，因此如果新建文件夹使用的文件名已经被占用，系统会以 (k) 的形式为新文件夹的文件名添加后缀，其中 k 是能保证文件名唯一的 最小正整数 。
 * 返回长度为 n 的字符串数组，其中 ans[i] 是创建第 i 个文件夹时系统分配给该文件夹的实际名称。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/making-file-names-unique/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function getFolderNames(names) {
    let n = names.length;
    let map = new Map();
    let ans = new Array(n).fill("");
    for (let i = 0; i < n; i++) {
        let temp = names[i];
        let num = 1;
        while (map.get(temp)) {
            temp = names[i] + "(" + num + ")";
            num++;
        }
        ans[i] = temp;
        map.set(temp, true);
    }
    return ans;
}
;
console.log(getFolderNames(["kaido", "kaido(1)", "kaido", "kaido(1)"]));
//# sourceMappingURL=3rd.js.map
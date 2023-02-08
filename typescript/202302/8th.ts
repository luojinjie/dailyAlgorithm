/**
 * 1233. 删除子文件夹
 * 你是一位系统管理员，手里有一份文件夹列表 folder，你的任务是要删除该列表中的所有 子文件夹，并以 任意顺序 返回剩下的文件夹。
 * 如果文件夹 folder[i] 位于另一个文件夹 folder[j] 下，那么 folder[i] 就是 folder[j] 的 子文件夹 。
 * 文件夹的「路径」是由一个或多个按以下格式串联形成的字符串：'/' 后跟一个或者多个小写英文字母。
 * 例如，"/leetcode" 和 "/leetcode/problems" 都是有效的路径，而空字符串和 "/" 不是。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/remove-sub-folders-from-the-filesystem/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function removeSubfolders(folder: string[]): string[] {
    // unicode排序(关键)
    folder.sort();
    let res = [folder[0]];
    for (let i = 1; i < folder.length; i++) {
        let prev = res[res.length - 1];

        // 比较前缀,与上一个文件夹相同并且下一位是"/"说明是其子文件夹
        if (folder[i].substring(0, prev.length) == prev && folder[i].substring(prev.length, prev.length + 1) == "/") {
            continue;
        }

        res.push(folder[i]);
    }

    return res;
};

console.log(removeSubfolders(["/a", "/a/b/c", "/a/b/d"]))
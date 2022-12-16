/**
 * 1945. 字符串转化后的各位数字之和
 * 给你一个由小写字母组成的字符串 s ，以及一个整数 k 。
 * 首先，用字母在字母表中的位置替换该字母，将 s 转化 为一个整数（也就是，'a' 用 1 替换，'b' 用 2 替换，... 'z' 用 26 替换）。接着，将整数 转换 为其 各位数字之和 。共重复 转换 操作 k 次 。
 * 例如，如果 s = "zbax" 且 k = 2 ，那么执行下述步骤后得到的结果是整数 8 ：
 * 转化："zbax" ➝ "(26)(2)(1)(24)" ➝ "262124" ➝ 262124
 * 转换 #1：262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17
 * 转换 #2：17 ➝ 1 + 7 ➝ 8
 * 返回执行上述操作后得到的结果整数。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/sum-of-digits-of-string-after-convert/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function getLucky(s: string, k: number): number {
    let codeA = "a".charCodeAt(0);
    let code0 = "0".charCodeAt(0);
    let link = "";
    for (let i = 0; i < s.length; i++) {
        link += "" + (s.charCodeAt(i) - codeA + 1).toString();
    }

    while (k > 0) {
        let temp = 0;
        for (let i = 0; i < link.length; i++) {
            temp += link.charCodeAt(i) - code0;
        }
        link = temp.toString();
        k--;
    }

    return Number(link);
};

console.log(getLucky("dbvmfhnttvr", 5))
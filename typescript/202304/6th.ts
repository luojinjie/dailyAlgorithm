/**
 * 1017. 负二进制转换
 * 给你一个整数 n ，以二进制字符串的形式返回该整数的 负二进制（base -2）表示。
 * 注意，除非字符串就是 "0"，否则返回的字符串中不能含有前导零。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/convert-to-base-2/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function baseNeg2(n: number): string {
    if (n == 0 || n == 1) {
        return n.toString();
    }

    let res = "";
    while (n) {
        let remainder = n & 1;
        res = remainder.toString() + res;
        n -= remainder; // 减去余数,可被-2整数
        n /= -2;
    }

    return res;
};

console.log(baseNeg2(15))
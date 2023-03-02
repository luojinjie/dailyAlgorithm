/**
 * 面试题 05.02. 二进制数转字符串
 * 二进制数转字符串。给定一个介于0和1之间的实数（如0.72），类型为double，打印它的二进制表达式。如果该数字无法精确地用32位以内的二进制表示，则打印“ERROR”。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/bianry-number-to-string-lcci/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function printBin(num: number): string {
    let res = "0.";
    while (res.length <= 32 && num) {
        num *= 2;
        if (num >= 1) {
            num--;
            res += "1";
        } else {
            res += "0";
        }
    }

    return num ? "ERROR" : res;
};

console.log(printBin(0.625));
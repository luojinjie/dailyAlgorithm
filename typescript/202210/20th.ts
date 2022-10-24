/**
 * 779. 第K个语法符号
 * 我们构建了一个包含 n 行( 索引从 1  开始 )的表。首先在第一行我们写上一个 0。接下来的每一行，将前一行中的0替换为01，1替换为10。
 * 例如，对于 n = 3 ，第 1 行是 0 ，第 2 行是 01 ，第3行是 0110 。
 * 给定行数 n 和序数 k，返回第 n 行中第 k 个字符。（ k 从索引 1 开始）
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/k-th-symbol-in-grammar
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function kthGrammar(n: number, k: number): number {
    if (n == 1) {
        return 0;
    }

    let len = Math.pow(2, n - 1);
    if (k > len / 2) {
        // 位于右侧,翻转符号
        var num = kthGrammar(n - 1, k - len / 2);
        return num == 0 ? 1 : 0;
    } else {
        return kthGrammar(n - 1, k);
    }
};

console.log(kthGrammar(3,5))
/**
 * 809. 情感丰富的文字
 * 有时候人们会用重复写一些字母来表示额外的感受，比如 "hello" -> "heeellooo", "hi" -> "hiii"。我们将相邻字母都相同的一串字符定义为相同字母组，例如："h", "eee", "ll", "ooo"。
 * 对于一个给定的字符串 S ，如果另一个单词能够通过将一些字母组扩张从而使其和 S 相同，我们将这个单词定义为可扩张的（stretchy）。扩张操作定义如下：选择一个字母组（包含字母 c ），然后往其中添加相同的字母 c 使其长度达到 3 或以上。
 * 例如，以 "hello" 为例，我们可以对字母组 "o" 扩张得到 "hellooo"，但是无法以同样的方法得到 "helloo" 因为字母组 "oo" 长度小于 3。此外，我们可以进行另一种扩张 "ll" -> "lllll" 以获得 "helllllooo"。如果 S = "helllllooo"，那么查询词 "hello" 是可扩张的，因为可以对它执行这两种扩张操作使得 query = "hello" -> "hellooo" -> "helllllooo" = S。
 * 输入一组查询单词，输出其中可扩张的单词数量。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/expressive-words/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function expressiveWords(s: string, words: string[]): number {
    let count = 0;
    let m = s.length;
    for (let word of words) {
        let i = 0;
        let j = 0;
        let n = word.length;
        while (i < m && j < n) {
            if (s[i] != word[j]) {
                break;
            }

            let sCnt = 0;
            let wCnt = 0;
            let sTemp = s[i];
            let wTemp = word[j];
            while (i < m && sTemp == s[i]) {
                sCnt++;
                i++;
            }

            while (j < n && wTemp == word[j]) {
                wCnt++;
                j++;
            }

            if (sCnt < wCnt || (sCnt != wCnt && sCnt < 3)) {
                break;
            }

            if (i == m && j == n) {
                count++;
            }
        }
    }

    return count;
};

console.log(expressiveWords("heeellooo", ["hello", "hi", "helo"]));
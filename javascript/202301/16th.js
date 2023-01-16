"use strict";
/**
 * 1813. 句子相似性 III
 * 一个句子是由一些单词与它们之间的单个空格组成，且句子的开头和结尾没有多余空格。比方说，"Hello World" ，"HELLO" ，"hello world hello world" 都是句子。每个单词都 只 包含大写和小写英文字母。
 * 如果两个句子 sentence1 和 sentence2 ，可以通过往其中一个句子插入一个任意的句子（可以是空句子）而得到另一个句子，那么我们称这两个句子是 相似的 。比方说，sentence1 = "Hello my name is Jane" 且 sentence2 = "Hello Jane" ，我们可以往 sentence2 中 "Hello" 和 "Jane" 之间插入 "my name is" 得到 sentence1 。
 * 给你两个句子 sentence1 和 sentence2 ，如果 sentence1 和 sentence2 是相似的，请你返回 true ，否则返回 false 。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/sentence-similarity-iii/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function areSentencesSimilar(sentence1, sentence2) {
    let word1 = sentence1.split(" ");
    let word2 = sentence2.split(" ");
    let i = 0;
    let j = 0;
    // 从前往后找匹配单词
    while (i < word1.length && i < word2.length && word1[i] == word2[i]) {
        i++;
    }
    // 从后往前找匹配单词
    while (j < word1.length - i && j < word2.length - i && word1[word1.length - j - 1] == word2[word2.length - j - 1]) {
        j++;
    }
    // N:只能插入一个句子,分3种情况:前面插入、后面插入、中间插入
    // 从前往后的匹配个数加上从后往前的匹配个数等于2个句子中单词较少的个数
    return i + j == Math.min(word1.length, word2.length);
}
;
console.log(areSentencesSimilar("My name is Haley", "My Haley"));
console.log(areSentencesSimilar("of", "A lot of words"));
console.log(areSentencesSimilar("Eating right now", "Eating"));
console.log(areSentencesSimilar("Luky", "Lucccky"));
//# sourceMappingURL=16th.js.map
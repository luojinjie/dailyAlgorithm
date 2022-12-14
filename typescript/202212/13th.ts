/**
 * 1832. 判断句子是否为全字母句
 * 全字母句 指包含英语字母表中每个字母至少一次的句子。
 * 给你一个仅由小写英文字母组成的字符串 sentence ，请你判断 sentence 是否为 全字母句 。
 * 如果是，返回 true ；否则，返回 false 。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/sum-of-beauty-of-all-substrings/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function checkIfPangram(sentence: string): boolean {
    let codeA = "a".charCodeAt(0);
    let target = Math.pow(2, 26) - 1;
    let binary = 0;
    for (let i = 0; i < sentence.length; i++) {
        let byte = sentence.charCodeAt(i) - codeA;
        binary |= 1 << byte;
    }

    return binary == target;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"))
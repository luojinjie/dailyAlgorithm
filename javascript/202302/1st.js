"use strict";
/**
 * 2325. 解密消息
 * 给你字符串 key 和 message ，分别表示一个加密密钥和一段加密消息。解密 message 的步骤如下：
 * 使用 key 中 26 个英文小写字母第一次出现的顺序作为替换表中的字母 顺序 。
 * 将替换表与普通英文字母表对齐，形成对照表。
 * 按照对照表 替换 message 中的每个字母。
 * 空格 ' ' 保持不变。
 * 例如，key = "happy boy"（实际的加密密钥会包含字母表中每个字母 至少一次），据此，可以得到部分对照表（'h' -> 'a'、'a' -> 'b'、'p' -> 'c'、'y' -> 'd'、'b' -> 'e'、'o' -> 'f'）。
 * 返回解密后的消息。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/decode-the-message/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function decodeMessage(key, message) {
    let letter = "abcdefghijklmnopqrstuvwxyz";
    let index = 0;
    let map = new Map();
    map.set(" ", " ");
    for (let i = 0; i < key.length; i++) {
        if (!map.get(key[i])) {
            map.set(key[i], letter[index++]);
        }
    }
    let res = "";
    for (let i = 0; i < message.length; i++) {
        res += map.get(message[i]);
    }
    return res;
}
;
console.log(decodeMessage("the quick brown fox jumps over the lazy dog", "vkbs bs t suepuv"));
//# sourceMappingURL=1st.js.map
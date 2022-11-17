"use strict";
/**
 * 792. 匹配子序列的单词数
 * 给定字符串 s 和字符串数组 words, 返回  words[i] 中是s的子序列的单词个数 。
 * 字符串的 子序列 是从原始字符串中生成的新字符串，可以从中删去一些字符(可以是none)，而不改变其余字符的相对顺序。
 * 例如， “ace” 是 “abcde” 的子序列。
 *
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/number-of-matching-subsequences/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
// 方法1:暴力(几乎超时,勉强通过)
function numMatchingSubseq(s, words) {
    let count = 0;
    for (let word of words) {
        let i = 0;
        for (let j = 0; j < s.length; j++) {
            if (s[j] != word[i]) {
                continue;
            }
            i++;
            if (i == word.length) {
                count++;
                break;
            }
        }
    }
    return count;
}
;
// 方法2:二分查找
function numMatchingSubseq2(s, words) {
    let list = new Array(26).fill(0).map(() => new Array(0));
    let code = "a".charCodeAt(0);
    let count = words.length;
    for (let i = 0; i < s.length; i++) {
        let letter = s.charCodeAt(i) - code;
        list[letter].push(i);
    }
    for (let word of words) {
        if (word.length > s.length) {
            count--;
            continue;
        }
        let pos = -1;
        for (let i = 0; i < word.length; i++) {
            let letter = word.charCodeAt(i) - code;
            // 无该字母记录
            if (list[letter].length == 0) {
                count--;
                break;
            }
            // 二分查找位置,必须比上次位置大
            let idx = binarySearch(list[letter], pos);
            if (idx <= pos) {
                count--;
                break;
            }
            // 更新当前匹配位置
            pos = idx;
        }
    }
    return count;
}
;
function binarySearch(list, index) {
    if (!list || list.length == 0) {
        return -1;
    }
    let left = 0;
    let right = list.length - 1;
    while (left < right) {
        let middle = left + Math.floor((right - left) / 2);
        if (list[middle] > index) {
            right = middle; // N:不需要减1
        }
        else {
            left = middle + 1;
        }
    }
    return list[left];
}
// console.log(binarySearch([1, 2, 3, 4, 5], -1))
console.log(numMatchingSubseq2("dsahjpjauf", ["ahjpjau", "ja", "ahbwzgqnuk", "tnmlanowax"]));
//# sourceMappingURL=17th.js.map
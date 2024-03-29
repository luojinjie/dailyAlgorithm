/**
 * 2347. 最好的扑克手牌
 * 给你一个整数数组 ranks 和一个字符数组 suit 。你有 5 张扑克牌，第 i 张牌大小为 ranks[i] ，花色为 suits[i] 。
 * 下述是从好到坏你可能持有的 手牌类型 ：
 * "Flush"：同花，五张相同花色的扑克牌。
 * "Three of a Kind"：三条，有 3 张大小相同的扑克牌。
 * "Pair"：对子，两张大小一样的扑克牌。
 * "High Card"：高牌，五张大小互不相同的扑克牌。
 * 请你返回一个字符串，表示给定的 5 张牌中，你能组成的 最好手牌类型 。
 * 注意：返回的字符串 大小写 需与题目描述相同。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/best-poker-hand/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function bestHand(ranks: number[], suits: string[]): string {
    let set: Set<string> = new Set();
    for (let suit of suits) {
        set.add(suit);
    }

    if (set.size == 1) {
        return "Flush";
    }

    let map: Map<number, number> = new Map();
    let isPair = false;
    for (let rank of ranks) {
        let temp = map.get(rank) || 0;
        if (temp == 2) {
            return "Three of a Kind";
        } else if (temp == 1) {
            isPair = true;
        }

        map.set(rank, temp + 1);
    }

    return isPair ? "Pair" : "High Card";
};

console.log(bestHand([4, 4, 2, 4, 4], ["d", "a", "a", "b", "c"]))
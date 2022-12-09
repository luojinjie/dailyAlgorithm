/**
 * 1780. 判断一个数字是否可以表示成三的幂的和
 * 给你一个整数 n ，如果你可以将 n 表示成若干个不同的三的幂之和，请你返回 true ，否则请返回 false 。
 * 对于一个整数 y ，如果存在整数 x 满足 y == 3x ，我们称这个整数 y 是三的幂。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/check-if-number-is-a-sum-of-powers-of-three/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 方法1:
function checkPowersOfThree(n: number): boolean {
    let map = {};
    let power = 0;
    let prev = 0;
    while (n > 0) {
        if (n >= Math.pow(3, power)) {
            prev = power;
            power++;
        } else {
            if (map[prev]) {
                console.log(prev)
                return false;
            }
            map[prev] = 1;
            n -= Math.pow(3, prev);
            power = 0;
            prev = 0;
        }
    }

    if (n == 0 || n == 1) {
        return true;
    }

    return false;
};

// 方法2:三进制
function checkPowersOfThree2(n: number): boolean {
    // 12 => 110,出现2说明存在相同的幂
    while (n) {
        if (n % 3 == 2) {
            return false;
        }

        n = Math.floor(n / 3);
    }

    return true;
};

console.log(checkPowersOfThree2(91))
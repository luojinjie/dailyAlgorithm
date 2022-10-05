/**
 * 811. 子域名访问计数
 * 网站域名 "discuss.leetcode.com" 由多个子域名组成。顶级域名为 "com" ，二级域名为 "leetcode.com" ，最低一级为 "discuss.leetcode.com" 。当访问域名 "discuss.leetcode.com" 时，同时也会隐式访问其父域名 "leetcode.com" 以及 "com" 。
 * 计数配对域名 是遵循 "rep d1.d2.d3" 或 "rep d1.d2" 格式的一个域名表示，其中 rep 表示访问域名的次数，d1.d2.d3 为域名本身。
 * 例如，"9001 discuss.leetcode.com" 就是一个 计数配对域名 ，表示 discuss.leetcode.com 被访问了 9001 次。
 * 给你一个 计数配对域名 组成的数组 cpdomains ，解析得到输入中每个子域名对应的 计数配对域名 ，并以数组形式返回。可以按 任意顺序 返回答案。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/subdomain-visit-count
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function subdomainVisits(cpdomains: string[]): string[] {
    if (!cpdomains || cpdomains.length == 0) {
        return [];
    }

    let map = {};

    for (let cpdomain of cpdomains) {
        let info = cpdomain.split(" ");
        let count = Number(info[0]); // 访问次数
        let domain = info[1]; // 当前域名
        while (domain) {
            if (!map[domain]) {
                map[domain] = 0;
            }
            map[domain] += count;

            let idx = domain.indexOf(".");
            if (idx > 0) {
                domain = domain.substring(idx + 1); // 上级域名
            } else {
                domain = null;
            }
        }
    }

    // 格式转换
    let res = [];
    for (let key in map) {
        res.push(map[key] + " " + key);
    }

    return res;
};

subdomainVisits(["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"])
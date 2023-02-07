/**
 * 1604. 警告一小时内使用相同员工卡大于等于三次的人
 * 力扣公司的员工都使用员工卡来开办公室的门。每当一个员工使用一次他的员工卡，安保系统会记录下员工的名字和使用时间。如果一个员工在一小时时间内使用员工卡的次数大于等于三次，这个系统会自动发布一个 警告 。
 * 给你字符串数组 keyName 和 keyTime ，其中 [keyName[i], keyTime[i]] 对应一个人的名字和他在 某一天 内使用员工卡的时间。
 * 使用时间的格式是 24小时制 ，形如 "HH:MM" ，比方说 "23:51" 和 "09:49" 。
 * 请你返回去重后的收到系统警告的员工名字，将它们按 字典序升序 排序后返回。
 * 请注意 "10:00" - "11:00" 视为一个小时时间范围内，而 "23:51" - "00:10" 不被视为一小时内，因为系统记录的是某一天内的使用情况。
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/alert-using-same-key-card-three-or-more-times-in-a-one-hour-period/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function alertNames(keyName: string[], keyTime: string[]): string[] {
    // 哈希表存储每个人的使用员工卡记录
    let map: Map<string, number[]> = new Map();
    for (let i = 0; i < keyName.length; i++) {
        let times = map.get(keyName[i]);
        if (!times) {
            times = [];
        }

        // 转换成分钟方便计算
        let hour = Number(keyTime[i].substring(0, 2));
        let min = Number(keyTime[i].substring(3));
        times.push(hour * 60 + min);

        map.set(keyName[i], times);
    }

    let res: string[] = [];
    for (let items of map.entries()) {
        let list = items[1].sort((a: number, b: number) => a - b);
        for (let i = 2; i < list.length; i++) {
            if (list[i] - list[i - 2] <= 60) {
                res.push(items[0])
                break;
            }
        }
    }

    return res.sort();
};

console.log(alertNames(["daniel", "daniel", "daniel", "luis", "luis", "luis", "luis"], ["10:00", "10:40", "11:00", "09:00", "11:00", "13:00", "15:00"]))
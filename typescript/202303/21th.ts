/**
 * 2469. 温度转换
 * 给你一个四舍五入到两位小数的非负浮点数 celsius 来表示温度，以 摄氏度（Celsius）为单位。
 * 你需要将摄氏度转换为 开氏度（Kelvin）和 华氏度（Fahrenheit），并以数组 ans = [kelvin, fahrenheit] 的形式返回结果。
 * 返回数组 ans 。与实际答案误差不超过 10-5 的会视为正确答案。
 * 注意：
 * 开氏度 = 摄氏度 + 273.15
 * 华氏度 = 摄氏度 * 1.80 + 32.00
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode.cn/problems/convert-the-temperature/
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
function convertTemperature(celsius: number): number[] {
    return [celsius + 273.15, celsius * 1.80 + 32.00];
};

console.log(convertTemperature(36.5))
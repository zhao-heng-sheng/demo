/* 
真题描述：给定一个非空字符串,最多删除一个字符。判断是否能成为回文字符串。
*/
/* 
  示例1：输入:"aba"
输出:True
示例2:
输入："abca"
输出:True
解释:你可以删除c字符。
注意:字符串只包含从a-z的小写字母。字符串的最大长度是50000。
*/

let isPalindrome = (str) => {
    return str.split("").reverse().join("") === str;
};
let str = "abxxcba";
let fn = (str) => {
    if (isPalindrome(str)) return true;
    let len = str.length;
    let count = 0;
    let differents = [];
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            count++;
            if (count > 1) return false;
            differents.push(i, len - 1 - i);
        }
    }
    let str1 = str.slice(0, differents[0]) + str.slice(differents[0] + 1);
    let str2 = str.slice(0, differents[1]) + str.slice(differents[1] + 1);
    console.log(differents);
    if (isPalindrome(str1) || isPalindrome(str2)) return true;
    return false;
};
console.log(fn(str));

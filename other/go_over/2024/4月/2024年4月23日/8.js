/* 
真题描述： 设计一个支持以下两种操作的数据结构：
void addWord(word)
bool search(word)
search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
. 可以表示任何一个字母。
*/
/* 
示例: addWord("bad")
addWord("dad")
addWord("mad")
search("pad") -> false
search("bad") -> true
search(".ad") -> true
search("b..") -> true
说明:
你可以假设所有单词都是由小写字母 a-z 组成的。
*/
let map = new Map();

let addWord = str => {
	map.set(str, 1)
}
let search = reg => {
	let str = ''
	if (str) return str
	return false
}
search("pad")
search("bad")
search(".ad")
search("b..")
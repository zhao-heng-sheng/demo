/* 
题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足： 左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。
示例 1:
输入: "()"
输出: true
示例 2:
输入: "()[]{}"
输出: true
示例 3:
输入: "(]"
输出: false
示例 4:
输入: "([)]"
输出: false
示例 5:
输入: "{[]}"
输出: true
*/
let parallelism = {
  '(':')',
  '[':']',
  '{':'}'
}
let fn = (s)=>{
  if(!s) return true;
  const stack = []
  const len = s.length
  for(let i=0;i<len;i++){
	  let val = s[i]
	  if(parallelism[val]) stack.push(parallelism[val])
	  else {
		  let v = stack.pop()
		  if(v!==val) return false
	  }
  }
  if(stack.length) return false
  return true
}
console.log(fn('(]'))
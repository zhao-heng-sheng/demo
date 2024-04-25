// 是否是回文字符串

let reverseStr = (str)=>{
	if(typeof str==='string') return str.split('').reverse().join('');
	return  new Error('xxx')
}
let isPalindrome = (str)=>{
  console.log(str,reverseStr(str));
	if(str==reverseStr(str)) return true
	return false
}
let a = 'yesey'
console.log(isPalindrome(a))
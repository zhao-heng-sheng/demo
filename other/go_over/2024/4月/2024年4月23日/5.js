// 是否是回文字符串
let a = 'yeey'
let isPalindrome = (str)=>{
	let is = true;
	let len  =str.length
	for(let i=0;i<len/2;i++){
    console.log(str[i],str[len-i-1]);
		if(str[i]!==str[len-i-1]) is = false
	}
	return is
}
console.log(isPalindrome(a))
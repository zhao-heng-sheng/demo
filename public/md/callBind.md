# this
this指向取决于函数的调用方式，一般情况下有四种调用场景。
1. 在new中调用，this绑定的是新创建的对象
2. 通过call/apply/bind调用，this绑定的是指定对象
3. 在上下文对象中调用，this绑定的是上下文对象（也就是常说的 谁.fn()，谁就是fn执行时this指向的对象）
4. 直接调用，this严格模式下是undefined，非严格模式下绑定window

箭头函数是个例外，他是根据作用域来决定this指向的，而且无法被修改。

# call

要实现call，我们只要利用第3种场景，让函数在指定对象的上下文中调用就可以实现了
```js
Function.prototype.myCall = function(context,...args){
	//创建一个唯一的键，防止覆盖上下文对象里的数据
	let soleKey = Symbol()
	//把要调用的函数存到指定上下文对象中（调用myCall是在要调用函数的上下文对象中调用的，所以myCall的this就是要调用的函数）
	context[soleKey] = this
	//在指定上下文对象中调用，this指向了context
	let res = context[soleKey](...args)
	//调用后删除存入的函数
	delete context[soleKey]
	//返回调用函数的返回值
	return res
}
```
fun.call()
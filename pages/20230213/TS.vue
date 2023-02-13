<template>
    <div>

    </div>
</template>

<script setup lang="ts">
const tmp:Object = 123    //Object包含所有类型
// 元组
const arr:[string,number,boolean?] = ['1',2,,]

// 元组具名
const arr2:[name:string,age:number,male:boolean] = ['zs',12,false]
// console.log(arr[3])   //报错
// console.log(arr.length)

/**
 * 每个属性的值必须一一对应到接口的属性类型
 * 不能有多的属性和少的属性
 */
interface Obj {
    readonly name:string,   //只读
    age:number,
    male:boolean,
    fun?:Function,   //可选
    code:200|404|500,   //字面量类型，可精确推导
    mixed:true|string|((name:string)=>boolean)  //联合类型，可实现互斥属性：即这一属性有字段一，就没有字段二
    user:{vip:true;expires:string;} | {vip:false;promotion:string} //联合类型，可实现互斥属性：即这一属性有字段一，就没有字段二 if(obj.user.vip) obj.user.expires
}

/**
 * 枚举
 * 枚举是双向映射，即枚举成员可以映射到枚举值，枚举值也可以映射到枚举成员 Items.Foo 0   Items[0] Foo
 * 字符串是单向映射
 * const可以声明常量枚举，常量枚举只能通过枚举成员访问枚举值
 */
enum Items {
    Foo,
    Bar=599,
    Baz,            //600
    Str = 'xxx'
}

/**
 * 函数
 * 返回值可以自动推导
 * 没有返回值的话，返回类型被标记为void，实际返回值是undefined。因为在TS中，undefined类型是一个实际有意义的值，void才代表空的、无意义的值。
 */
function fun(name:string,gender:string='男',...rest:any[]):number{
    return name.length
}
let fun2 = (name:string)=>{return name.length}
let fun3:(name:string)=>number = (name)=>{return name.length} //不推荐这样写 可以用type抽离出来
</script>

<style scoped>

</style>
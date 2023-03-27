<template>
    <div>
        访问符装饰器并不常见，甚至访问符对于部分同学来说也是陌生的，但它其实就是 get value(){} 与 set value(v)=>{} 这样的方法，其中 getter 在你访问这个属性 value 时触发，而 setter 在你对 value 进行赋值时触发。访问符装饰器本质上仍然是方法装饰器，它们使用的类型定义也相同。
需要注意的是，访问符装饰器只能同时应用在一对 getter / setter 的其中一个，即要么装饰 getter 要么装饰 setter 。这是因为，不论你是装饰哪一个，装饰器入参中的属性描述符都会包括 getter 与setter 方法：
    </div>
</template>

<script setup lang="ts">
class Foo {
    _value!: string;

    get value() {
        return this._value;
    }

    @HijackSetter("LIN_BU_DU")
    set value(input: string) {
        this._value = input;
    }
}

function HijackSetter(val: string): MethodDecorator {
    return (target, methodIdentifier, descriptor: any) => {
        console.log(target, methodIdentifier,descriptor)
        const originalSetter = descriptor.set;
        descriptor.set = function (newValue: string) {
            const composed = `Raw: ${newValue}, Actual: ${val}-${newValue}`;
            originalSetter.call(this, composed);
            console.log(`HijackSetter: ${composed}`);
        };
        // 篡改 getter，使得这个值无视 setter 的更新，返回一个固定的值
        // descriptor.get = function () {
        // return val;
        // };
    };
}

const foo = new Foo();
foo.value = "LINBUDU"; // HijackSetter: Raw: LINBUDU, Actual: LIN_BU_DU-LINBUDU
</script>

<style scoped></style>

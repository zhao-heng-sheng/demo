<template>
    <div>类装饰器是直接作用在类上的装饰器，它在执行时的入参只有一个，那就是这个类本身（而不是类的原型对象）。因此，我们可以通过类装饰器来覆盖类的属性与方法，如果你在类装饰器中返回一个新的类，它甚至可以篡改掉整个类的实现。</div>
</template>

<script setup lang="ts">
// 类装饰器
function AddMethod(): ClassDecorator {
    return (target: any) => {
        target.prototype.newInstanceMethod = () => {
            console.log("new instance method");
        };
        target.newStaticMethod = () => {
            console.log("Let's add a new static method!");
        };
    };
}
function AddProperty(value: string): ClassDecorator {
    return (target: any) => {
        target.prototype.newInstanceProperty = value;
        target.newStaticProperty = `static ${value}`;
    };
}

@AddProperty("linbudu")
@AddMethod()
class Foo {
    a = 1;
}
const foo: any = new Foo();
console.log(foo);
foo.newInstanceMethod();
Foo.newStaticMethod();

console.log(foo.newInstanceProperty);
console.log(Foo.newStaticProperty);

const OverrideBar = (target: any) => {
    return class extends target {
        print() {}
        overridedPrint() {
            console.log("This is Overrided Bar!");
        }
    };
};

@OverrideBar
class Bar {
    print() {
        console.log("This is Bar!");
    }
}

// 被覆盖了，现在是一个空方法
new Bar().print();

// This is Overrided Bar!
(<any>new Bar()).overridedPrint();
</script>

<style scoped></style>

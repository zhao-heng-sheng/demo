<template>
    <div>属性装饰器在独立使用时能力非常有限，它的入参只有类的原型与属性名称，返回值会被忽略，但你仍然可以通过直接在类的原型上赋值来修改属性</div>
</template>

<script setup lang="ts">
class Foo {
    @ModifyNickName()
    nickName!: string;
    constructor() {}
}

function ModifyNickName(): PropertyDecorator {
    return (target: any, propertyIdentifier) => {
        console.log(target, propertyIdentifier)
        target[propertyIdentifier] = "林不渡!";
        target["otherName"] = "别名林不渡!";
    };
}
console.log(new Foo())
console.log(new Foo().nickName);
// @ts-expect-error
console.log(new Foo().otherName);
</script>

<style scoped></style>

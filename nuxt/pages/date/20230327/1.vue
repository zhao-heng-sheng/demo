<template>
    <div>参数装饰器包括了构造函数的参数装饰器与方法的参数装饰器，它的入参包括类的原型、参数所在的方法名与参数在函数参数中的索引值（即第几个参数），如果只是单独使用，它的作用同样非常有限。</div>
</template>

<script setup lang="ts">
class Foo {
    handler(@CheckParam() input: string) {
        console.log(input);
    }
}

function CheckParam(): ParameterDecorator {
    return (target, methodIdentifier, index) => {
        console.log(target, methodIdentifier, index);
    };
}

// {} handler 0
new Foo().handler("linbudu");
</script>

<style scoped></style>

<template>
    <div>
        <button class="hover-tips btn-1" href="https://www.baidu.com" data-msg="Hello World">提示框</button>
        <br>
        <button class="hover-tips btn-2" href="https://www.baidu.com"></button>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.hover-tips {
    position: relative;
    padding: 0 20px;
    border-radius: 10px;
    height: 40px;
    background-color: #66f;
    line-height: 40px;
    color: #fff;
    & + .hover-tips {
        margin-top: 10px;
    }
    &.btn-1 {
        &::after {
            position: absolute;
            left: 0;
            top: 0;
            border-radius: 5px;
            width: 100%;
            height: 100%;
            background-color: rgba(#000, 0.5);
            opacity: 0;
            text-align: center;
            font-size: 12px;
            content: attr(data-msg);
            transition: all 300ms;
        }
        &:hover::after {
            left: calc(100% + 20px);
            opacity: 1;
        }
    }
    &.btn-2:empty::after {
        content: attr(href);
    }
}
</style>

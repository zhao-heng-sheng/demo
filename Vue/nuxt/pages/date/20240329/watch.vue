<template>
    <p>年龄：{{ age }}</p>
    <p>车：{{ car.brand }}</p>
    <p>房子地址：{{ house.address }}</p>
    <button @click="age++">年龄调整</button><br>
    <button @click="car.brand =car.brand+'~'">车调整</button><br>
    <button @click="house.address =house.address+'~'">房调整</button><br>
</template>

<script setup>
import { watch } from "vue";
let age = ref(18);
let name = ref("张三");
let car = reactive({
    brand: "奔驰",
    price: 1000000,
});
let house = ref({
    address: "北京",
    price: 10000000,
})
watch(
    age,
    (val) => {
        console.log(val);
    },
    {}
);
watch(car, (val) => {
    console.log(val);
});
// watch(house, (val) => {
//     console.log(val);
// },{deep:true});
watch(
    () => house.value.address,
    (val) => {
        console.log(val);
    }
);
</script>

<style lang="scss" scoped></style>

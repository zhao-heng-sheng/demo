<template>
    <div>
        <NButton @click="onLogin">登录</NButton>
    </div>
</template>

<script setup lang="ts">
import { useUser } from "~/store/user";
// 获取状态，转换为 Ref，其他代码无需改变
const store = useUser();
const { isLogin } = storeToRefs(store);
const router = useRouter();
const route = useRoute();
const onLogin = () => {
    isLogin.value = true;
    const callback = route.query.callback?.toString() || "";
    router.push(callback);
};
</script>

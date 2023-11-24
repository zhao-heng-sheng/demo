<template>
  <div class="py-4">
    Count: {{ count }} Count2: {{ count2 }}
    <div class="mt-2">
      <NButton
        @click="
          count++;
          count2++;
        "
        >+</NButton
      >
      <NButton
        @click="
          count--;
          count2--;
        "
        >-</NButton
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounter } from '~/store/counter';

// 全局状态
const store = useCounter();
const { value: count } = storeToRefs(store);
// 局部状态
const count2 = ref(1);
</script>
<template>
  <div>
    <X>
      <template #xxx>
        <div ref="c">
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </div>
      </template>
    </X>
  </div>
</template>

<script setup>
import X from './x.vue'
import { ref } from 'vue'
const c = ref(null)
onMounted(() => {
  console.log(c)
})
</script>

<style lang="scss" scoped>

</style>
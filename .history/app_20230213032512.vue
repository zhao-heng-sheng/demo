<template>
  <div>
    <NuxtPage ref="nuxtPage" />
  </div>
</template>
<script>
export default {
  created(){
    console.log(this)
    console.log(globalThis)
    // window.vue = useState('this')
  }
}
</script>

<style lang="scss" scoped>

</style>

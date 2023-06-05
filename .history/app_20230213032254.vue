<template>
  <div>
    <NuxtPage ref="nuxtPage" />
  </div>
</template>
<script>
export default {
  created(){
    console.log(this)
    console.log(window,Window,globalThis)
    // window.vue = useState('this')
  }
}
</script>

<style lang="scss" scoped>

</style>

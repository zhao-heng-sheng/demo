<template>
    <div class="flex items-center flex-col gap-2 py-4">
      <!-- 处理请求错误 -->
      <div v-if="error" class="text-red-300">{{ error.message }}</div>
      <!-- 处理加载状态 -->
      <div v-if="pending">加载中...</div>
      <div v-else>
          <div v-for="post in posts" :key="post.id">
            <NuxtLink class="text-lg" :to="`/detail/${post.id}`">{{
              post.title
            }}</NuxtLink>
            <p class="text-slate-500">发布于: {{ post.date }}x</p>
          </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
    // const posts = await $fetch("/api/posts");
    const { data: posts, pending, error } = await useLazyFetch('/api/posts')
    const appConfig = useAppConfig()
    console.log(appConfig)
    useHead(
      {
        title:'hello ',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'hello world'
          }
        ]
      }
    )
  </script>
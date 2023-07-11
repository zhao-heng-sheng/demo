// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
<<<<<<< HEAD
  devtools: { enabled: true }
})
=======
    devtools: { enabled: true },
    modules: [
        "@nuxtjs/tailwindcss",
        "@huntersofbook/naive-ui-nuxt",
        "@unocss/nuxt",
        [
            "@pinia/nuxt",
            {
                autoImports: [
                    // 自动引入 `defineStore(), storeToRefs()`
                    "defineStore",
                    "storeToRefs",
                ],
            },
        ],
    ],
    unocss: {
        uno: true, // enabled `@unocss/preset-uno`
        icons: true, // enabled `@unocss/preset-icons`
        attributify: true, // enabled `@unocss/preset-attributify`,
        // core options
        shortcuts: [],
        rules: [],
        safelist: [],
    },
});
>>>>>>> 6f2f3df8ec4009bf5fa2fe400a3bd1fb9a073c70

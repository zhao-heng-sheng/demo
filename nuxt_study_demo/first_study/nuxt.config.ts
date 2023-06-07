// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["~/assets/css/global.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/css/variables.scss";`,
                },
            },
        },
    },
    modules: [
        "@nuxtjs/tailwindcss",
        "@huntersofbook/naive-ui-nuxt",
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
    ssr: true,
    // nitro: {
    //     preset: "vercel",
    // },
    runtimeConfig: {
        // 只能用于服务端的 keys
        apiSecret: "123",
        // 可用于客户端的 keys
        public: {
            apiBase: "/api",
        },
    },
    imports: {
        dirs: ["store"],
    },
    app: {
        head: {
            charset: "utf-8", // 快捷方式
            viewport: "width=device-width, initial-scale=1", // 快捷方式
            title: "My App",
            meta: [
                { name: "description", content: "My amazing site." },
                { name: "charset", content: "utf-8" },
            ],
            link: [],
            style: [],
            script: [],
        },
    },
});

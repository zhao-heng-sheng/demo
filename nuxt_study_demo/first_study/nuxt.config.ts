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
    modules: ["@nuxtjs/tailwindcss", "@huntersofbook/naive-ui-nuxt"],
});

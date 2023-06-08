export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook("app:created", (vueApp) => {
      vueApp.config.globalProperties.$alert = (msg: string) => {
        console.log(msg);
        const message = useMessage();
        console.log(message)
        message.warning(msg);
      };
    });
  });
export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.config.errorHandler = (..._args) => {
        console.log("vue error handler");
        console.log(_args);
    };
    nuxtApp.hook('app:error',(...args)=>{
        console.log("app:error");
        console.log(args);
    })
    nuxtApp.hook('vue:error',(...args)=>{
        console.log("vue:error");
        console.log(args);
    })
});

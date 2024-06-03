import Router from "vue-router";
let router = new Router({
    routes: [
        {
            path: "/",
            component: () => import("@/views/home/index.vue"),
        },
        {
            path: "/index",
            component: () => import("@/views/home/index.vue"),
        },
    ],
});

export default router;

import Router from "vue-router";
function loadRouters() {
    const context = import.meta.globEager("../views/**/*.vue");
    const routes = [];
    routes.push({ path: "/", component: () => import(`../views/home.vue`) });
    Object.keys(context).forEach((key) => {
        if (key === "./index.ts") return;
        let name = key.replace(/(\.\.\/views\/|\.vue)/g, "");
        let path = "/" + name.toLowerCase();
        routes.push({
            path: path,
            name: name,
            component: () => import(`../views/${name}.vue`),
        });
    });

    return { context, routes };
}
let router = new Router({
    routes: [
        {
            path: "/",
            component: () => import("@/components/Home.vue"),
        },
        {
            path: "/about",
            component: () => import("@/components/About.vue"),
        },
    ],
});

export default router;

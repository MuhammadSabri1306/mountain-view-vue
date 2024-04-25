import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";

const routes = [
    { path: "/", component: Home },
];

export default createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition)
            return savedPosition;
        return { top: 0 };
    }
});
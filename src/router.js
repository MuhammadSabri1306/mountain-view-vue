import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Property from "@/views/Property.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/contact", name: "contact", component: Contact },
    { path: "/property/:houseId(\\d+)", name: "property", component: Property },
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
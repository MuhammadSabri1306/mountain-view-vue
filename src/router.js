import { createWebHistory, createRouter } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Contact from "@/views/Contact.vue";
import Property from "@/views/Property.vue";
import PanoramaViewer from "@/views/PanoramaViewer.vue";
import Error404 from "@/views/Error404.vue";
import TestRoomTour from "@/views/TestRoomTour.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About },
    { path: "/contact", name: "contact", component: Contact },
    { path: "/property/:houseId", name: "property", component: Property },
    { path: "/panorama-viewer/:panoramaId", name: "panoramaViewer", component: PanoramaViewer },
    { path: "/test-room-tour", name: "testRoomTour", component: TestRoomTour },
    { path: "/:pathMatch(.*)*", name: "e404", component: Error404 },
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
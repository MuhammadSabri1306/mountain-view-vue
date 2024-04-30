<script setup>
import { computed } from "vue";
import { useRoute, RouterLink } from "vue-router";

const navRoutes = {
    home: { title: "Beranda", path: "/" },
    about: { title: "Tentang Kami", path: "/about" },
    property: { title: "Properti" },
    property1: { title: "Tipe 36", path: "/property/1" },
    property2: { title: "Tipe 45", path: "/property/2" },
    contact: { title: "Kontak Kami", path: "/contact" },
};

const route = useRoute();
const isNavActive = (...routePaths) => {
    const activeRoutePath = route.path;
    for(let i=0; i<routePaths.length; i++) {
        if(routePaths[i] == activeRoutePath)
            return true;
    }
    return false;
};
</script>
<template>
    <section id="topbar" class="d-none d-lg-block">
        <div class="container d-flex">
            <div class="contact-info mr-auto">
                <i class="icofont-envelope"></i><a href="#">imawansawaty18@mhs.akba.ac.id</a>
                <i class="icofont-phone"></i> +6282195025427
            </div>
            <div class="social-links">
                <a href="#" class="twitter"><i class="icofont-twitter"></i></a>
                <a href="#" class="facebook"><i class="icofont-facebook"></i></a>
                <a href="#" class="instagram"><i class="icofont-instagram"></i></a>
            </div>
        </div>
    </section>
    <header id="header">
        <div class="container d-flex">
            <div class="logo mr-auto">
                <h1 class="text-light">
                    <RouterLink to="/">
                        <span>The Mountain View</span>
                    </RouterLink>
                </h1>
            </div>
            <nav class="nav-menu d-none d-lg-block">
                <ul>
                    <li :class="{ 'active': isNavActive(navRoutes.home.path) }">
                        <RouterLink :to="navRoutes.home.path">{{ navRoutes.home.title }}</RouterLink>
                    </li>
                    <li :class="{ 'active': isNavActive(navRoutes.about.path) }">
                        <RouterLink :to="navRoutes.about.path">{{ navRoutes.about.title }}</RouterLink>
                    </li>
                    <li class="drop-down" :class="{ 'active': isNavActive(navRoutes.property1.path, navRoutes.property2.path) }">
                        <a role="button">{{ navRoutes.property.title }}</a>
                        <ul>
                            <li :class="{ 'active': isNavActive(navRoutes.property1.path) }">
                                <RouterLink :to="navRoutes.property1.path">{{ navRoutes.property1.title }}</RouterLink>
                            </li>
                            <li :class="{ 'active': isNavActive(navRoutes.property2.path) }">
                                <RouterLink :to="navRoutes.property2.path">{{ navRoutes.property2.title }}</RouterLink>
                            </li>
                        </ul>
                    </li>
                    <li :class="{ 'active': isNavActive(navRoutes.contact.path) }">
                        <RouterLink :to="navRoutes.contact.path">{{ navRoutes.contact.title }}</RouterLink>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
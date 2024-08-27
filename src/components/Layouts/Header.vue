<script setup>
import { ref, computed, watch } from "vue";
import { useRoute, RouterLink, onBeforeRouteLeave } from "vue-router";

const navRoutes = {
    home: { title: "Beranda", path: "/" },
    about: { title: "Tentang Kami", path: "/about" },
    property: { title: "Properti" },
    property1: { title: "Tipe 36", path: "/property/type-36" },
    property2: { title: "Tipe 45", path: "/property/type-45" },
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

const isNavToggled = ref(false);
watch(() => route.params, () => isNavToggled.value && (isNavToggled.value = false));
onBeforeRouteLeave(async () => {
    if(isNavToggled.value) {
        isNavToggled.value = false;
        await new Promise(resolve => setTimeout(resolve, 350));
    }
});
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
    <header>
        <div id="header" class="navbar navbar-light">
            <div class="container d-flex">
                <div class="logo mr-auto">
                    <h1 class="text-light !tw-text-[20px] md:!tw-text-[26px]">
                        <RouterLink to="/">
                            <span>The Mountain View</span>
                        </RouterLink>
                    </h1>
                </div>
                <button type="button" id="btnNavbarToggler" class="navbar-toggler" aria-controls="navbar"
                    aria-expanded="false" aria-label="Toggle navigation" @click="isNavToggled = !isNavToggled">
                    <span id="navbarTogglerIcon" class="navbar-toggler-icon"></span>
                </button>
                <nav id="navbar" class="nav-menu" :class="{ 'nav-toggled': isNavToggled }">
                    <ul>
                        <li class="navbar-close">
                            <button type="button" class="close" aria-label="Close" @click="isNavToggled = false">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </li>
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
        </div>
    </header>
</template>
<style scoped>

header {
    @apply tw-sticky tw-top-0 tw-z-50;
}

#btnNavbarToggler {
    @apply lg:tw-hidden;
}

/* #navbar {
    @apply tw-hidden lg:tw-block;
} */

#navbar {
    @apply tw-transition-[left_300ms] lg:tw-transition-none
        tw-fixed tw-w-screen tw-h-screen tw-top-0 -tw-left-full tw-bg-white
        lg:tw-static lg:tw-w-auto lg:tw-h-auto lg:tw-top-auto lg:tw-left-auto lg:tw-bg-inherit;
}

#navbar.nav-toggled {
    @apply tw-left-0 lg:tw-left-auto;
}

#navbar > ul {
    @apply tw-flex tw-flex-col lg:tw-block;
}

.navbar-close {
    @apply tw-ms-auto lg:tw-hidden;
}

.navbar-close > button {
    @apply tw-p-4;
}

#navbar li:not(.navbar-close) > a {
    @apply tw-border-b tw-border-[rgba(0,0,0,0.1)] lg:tw-border-0;
}

.nav-menu .drop-down:hover > ul {
    @apply tw-w-[calc(100vw-40px)] lg:tw-w-auto;
}

</style>
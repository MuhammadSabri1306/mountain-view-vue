<script setup>
import { onMounted } from "vue";
import Header from "./Header.vue";
import Footer from "./Footer.vue";

defineProps({
    heading: { type: String, default: null }
});

const externals = {
    css: [
        "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i",
        "/assets/vendor/bootstrap/css/bootstrap.min.css",
        "/assets/vendor/icofont/icofont.min.css",
        "/assets/vendor/boxicons/css/boxicons.min.css",
        "/assets/vendor/animate.css/animate.min.css",
        "/assets/vendor/owl.carousel/assets/owl.carousel.min.css",
        "/assets/vendor/venobox/venobox.css",
        "/assets/css/style.css",
    ],
    js: [
        "/assets/vendor/jquery/jquery.min.js",
        "/assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
        "/assets/vendor/jquery.easing/jquery.easing.min.js",
        "/assets/vendor/php-email-form/validate.js",
        "/assets/vendor/jquery-sticky/jquery.sticky.js",
        "/assets/vendor/owl.carousel/owl.carousel.min.js",
        "/assets/vendor/waypoints/jquery.waypoints.min.js",
        "/assets/vendor/counterup/counterup.min.js",
        "/assets/vendor/isotope-layout/isotope.pkgd.min.js",
        "/assets/vendor/venobox/venobox.min.js",
        "/assets/js/main.js",
    ]
};

const loadExternals = () => {

    externals.css.forEach(styleUrl => {
        if(document.head.querySelector(`link[href='${ styleUrl }']`))
            return;
        const styleElm = document.createElement("link");
        styleElm.setAttribute("rel", "stylesheet");
        styleElm.setAttribute("href", styleUrl);
        document.head.appendChild(styleElm);
    });

    externals.js.forEach(scriptUrl => {
        if(document.body.querySelector(`script[src='${ scriptUrl }']`))
            return;
        const scriptElm = document.createElement("script");
        scriptElm.setAttribute("src", scriptUrl);
        document.body.appendChild(scriptElm);
    });

};

// loadExternals();
</script>
<template>
    <Header />
    <main>
        <h3 v-if="heading">{{ heading }}</h3>
        <slot name="main"></slot>
    </main>
    <Footer />
</template>
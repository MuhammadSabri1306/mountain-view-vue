<script setup>
import Layouts from "@/components/Layouts";
</script>
<template>
    <Layouts>
        <template #main>

            <section id="hero">
                <div class="hero-container">
                    <div id="heroCarousel" class="carousel slide carousel-fade" data-ride="carousel">
                        <ol class="carousel-indicators" id="hero-carousel-indicators"></ol>
                        <div class="carousel-inner" role="listbox">

                            <div class="carousel-item tw-bg-fixed active" style="background:url(/assets/img/slide/1.jpg);">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        <h2 class="animate__animated animate__fadeInDown">Selamat Datang <span>The Mountain View</span></h2>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item tw-bg-fixed" style="background: url(/assets/img/slide/2.jpg);">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        <h2 class="animate__animated fanimate__adeInDown">Rumah <span>Buat Keluarga Kecil Anda</span></h2>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item tw-bg-fixed" style="background: url(assets/img/slide/3.jpg);">
                                <div class="carousel-container">
                                    <div class="carousel-content">
                                        <h2 class="animate__animated animate__fadeInDown">Dapatkan <span>Harga Promo Segera</span></h2>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon icofont-rounded-left" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
                            <span class="carousel-control-next-icon icofont-rounded-right" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>

            <article id="main">

                <section id="featured" class="featured">
                    <div class="container">
                        <div class="row">

                            <div class="col-lg-6">
                                <RouterLink to="/property/type-36">
                                    <div class="icon-box text-center">
                                        <i class="icofont-home"></i>
                                        <h3>Rumah Tipe 36</h3>
                                        <p>Rumah ini mempunyai luas bangunan sebesar 36 meter persegi dan luas tanah hingga 72 meter persegi</p>
                                    </div>
                                </RouterLink>
                            </div>

                            <div class="col-lg-6 mt-4 mt-lg-0">
                                <RouterLink to="/property/type-45">
                                    <div class="icon-box text-center">
                                        <i class="icofont-home"></i>
                                        <h3>Rumah Tipe 45</h3>
                                        <p>Rumah ini mempunyai luas bangunan sebesar 45 meter persegi dan luas tanah hingga 98 meter persegi</p>
                                    </div>
                                </RouterLink>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="about" class="about">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <img src="/assets/img/about.jpg" class="img-fluid" alt="">
                            </div>
                            <div class="col-lg-6 pt-4 pt-lg-0 content">
                                <h3>Development Property</h3>
                                <p class="font-italic">
                                </p>
                                <p>Mendevelop sebuah lahan kosong atau me-re-develop lahan yang sudah eksis adalah kegiatan yang menantang kreatifitas. Kreatifitas inilah yang  membuat industri real estate development dan properti menjadi industri yang hampir tidak pernah berhenti berinovasi.</p>
                            </div>
                        </div>
                    </div>
                </section>

            </article>

        </template>
    </Layouts>
</template>
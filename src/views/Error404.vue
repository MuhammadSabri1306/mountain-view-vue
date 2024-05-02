<script setup>
import Layouts from "@/components/Layouts";
</script>
<template>
    <Layouts>
        <template #main>
            <div id="hero" class="tw-h-[80vh] tw-bg-fixed tw-relative !tw-mb-0"
                style="background:url(/assets/img/slide/1.jpg);">
                <div class="tw-h-full tw-bg-slate-50/70 tw-flex tw-flex-col tw-justify-center tw-items-center">
                    <h2 class="text-center"><span>Ooppss...</span></h2>
                    <p class="text-center tw-font-semibold">
                        Halaman yang anda cari
                        tidak dapat ditemukan.
                    </p>
                    <div>
                        <RouterLink to="/" class="tw-rounded-full tw-px-4 tw-py-2 tw-transition-colors tw-bg-[#e96b56] hover:tw-bg-white tw-text-white hover:tw-text-[#e96b56]">
                            <i>Kembali ke Beranda</i>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </template>
    </Layouts>
</template>
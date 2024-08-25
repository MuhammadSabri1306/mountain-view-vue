<script setup>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import * as property36PanoramaData from "@/datas/panorama/property-36";
import * as streetPanoramaData from "@/datas/panorama/street";
import Error404 from "./Error404.vue";

const route = useRoute();
const panellumSrc = ref(null);
const panellumDefaultYaw = ref(null);

const watcherSrc = () => route.params.panoramaId;
const watcherCall = panoramaId => {
    if(panoramaId == "property-36") {
        panellumSrc.value = property36PanoramaData.panellumSrc;
        panellumDefaultYaw.value = property36PanoramaData.panellumDefaultYaw;
    } else if(panoramaId == "street") {
        panellumSrc.value = streetPanoramaData.panellumSrc;
        panellumDefaultYaw.value = streetPanoramaData.panellumDefaultYaw;
    } else {
        panellumSrc.value = null;
        panellumDefaultYaw.value = null;
    }
};

watch(watcherSrc, watcherCall);
watcherCall( watcherSrc() );
</script>
<template>
    <main v-if="panellumSrc" class="panorama-viewer">
        <VPannellum :src="panellumSrc" :yaw="panellumDefaultYaw" :hfov="120"
            style="height: 100%;"/>
    </main>
    <Error404 v-else />
</template>
<style scoped>

.panorama-viewer {
    @apply tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen;
}

</style>
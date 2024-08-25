<script setup>
import { panellumSrc, panellumDefaultYaw } from "@/datas/panorama/property-36";
// import { panellumSrc, panellumDefaultYaw, assets, toPanellumTestData } from "@/datas/panorama/street";
// import { panellumSrc, panellumDefaultYaw } from "@/datas/panorama/street";

import Layouts from "@/components/Layouts";
import PanoramaMarker from "@/components/PanoramaMarker.vue";

// const { panellumSrcTest: panellumSrc1, panellumDefaultYawTest: panellumDefaultYaw1 } = toPanellumTestData("street11");
// const { panellumSrcTest: panellumSrc2, panellumDefaultYawTest: panellumDefaultYaw2 } = toPanellumTestData("street12");
</script>
<template>
    <Layouts>
        <template #main>
            <div class="mt-5" style="margin-bottom: 200px;">
                <section id="about" class="about mb-5">
                    <div class="container">
                        <VPannellum :src="panellumSrc" :yaw="panellumDefaultYaw" :hfov="120"
                            style="height: 800px;"/>
                    </div>
                </section>
                <section>
                    <!-- <div class="container mb-5">
                        <VPannellum :src="panellumSrc1" :yaw="panellumDefaultYaw1" :hfov="120"
                            style="height: 800px;"/>
                    </div>
                    <div class="container mb-5">
                        <VPannellum :src="panellumSrc2" :yaw="panellumDefaultYaw2" :hfov="120"
                            style="height: 800px;"/>
                    </div> -->
                    <!-- <div class="container mb-5">
                        <PanoramaMarker :imgSrc="assets.street12" />
                    </div> -->
                </section>
            </div>
        </template>
    </Layouts>
</template>
<script setup>
import Layouts from "@/components/Layouts";
import panoramaSrc from "@/datas/panorama-property-36";
// import PanoramaMarker from "@/components/PanoramaMarker.vue";

const defaultSceneId = panoramaSrc.default.firstScene;
const defaultSceneSrc = {
    yaw: panoramaSrc.scenes[defaultSceneId].yaw || 0,
    hfov: panoramaSrc.scenes[defaultSceneId].hfov || 120,
};
</script>
<template>
    <Layouts>
        <template #main>
            <div class="mt-5" style="margin-bottom: 200px;">
                <section id="about" class="about mb-5">
                    <div class="container">
                        <VPannellum :src="panoramaSrc" :yaw="defaultSceneSrc.yaw" :hfov="defaultSceneSrc.hfov"
                            style="height: 800px;"/>
                    </div>
                </section>
                <!-- <section class="container">
                    <PanoramaMarker :imgSrc="panoramaSrc.scenes.indoorSittingRoomStep1.panorama" />
                </section> -->
            </div>
        </template>
    </Layouts>
</template>
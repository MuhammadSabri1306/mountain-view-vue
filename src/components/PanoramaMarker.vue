<script setup>
import { ref, computed } from "vue";

const props = defineProps({
    imgSrc: { type: String, required: true }
});

const imgElm = ref(null);

const markerNode = ref(null);
const panoramaMarkerData = computed(() => {
    const node = markerNode.value;
    if(!node) return null;

    const yaw = (node.x / imgElm.value.width) * 360 - 180;
    const pitch = 90 - (node.y / imgElm.value.height) * 180;
    return {
        yaw: Math.round(yaw),
        pitch: Math.round(pitch),
    };
});

const onImgClick = (event) => {
    const imgRect = imgElm.value.getBoundingClientRect();
    const clickX = event.clientX - imgRect.left;
    const clickY = event.clientY - imgRect.top;

    markerNode.value = { x: clickX, y: clickY };
};

const onClearMarker = () => markerNode.value = null;

const btnMarkerStyle = computed(() => {
    const node = markerNode.value;
    if(!node) return null;

    const imgRect = imgElm.value.getBoundingClientRect();
    return {
        left: `${ node.x }px`,
        top: `${ node.y }px`,
    };
});
</script>
<template>
    <div id="wrapper">
        <img ref="imgElm" :src="imgSrc" alt="" @click="onImgClick" />
        <button v-if="markerNode" type="button" id="marker" class="bg-warning text-warning"
            :style="btnMarkerStyle" @click="onClearMarker" title="Clear">_</button>
    </div>
    <div v-if="panoramaMarkerData">
        <table class="table">
            <tr>
                <th style="width:1px">yaw</th>
                <th style="width:1px">:</th>
                <td>{{ panoramaMarkerData.yaw }}</td>
            </tr>
            <tr>
                <th>pitch</th>
                <th>:</th>
                <td>{{ panoramaMarkerData.pitch }}</td>
            </tr>
        </table>
    </div>
</template>
<style scoped>

#wrapper {
    position: relative;
    display: inline-block;
}

#wrapper > img {
    width: 100%;
}

#marker {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
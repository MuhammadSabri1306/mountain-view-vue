<script setup>
import { ref, computed, watch } from "vue";

const emit = defineEmits([ "iframeLoaded", "iframeError" ]);
const props = defineProps({
    src: { default: null },
    height: { type: String, default: "40rem" }
});

const getBuiltSrc = () => {
    if(typeof props.src == "string" && props.src.startsWith("/"))
        return import.meta.env.BASE_URL + props.src.slice(1);
    return props.src;
};

const iframeSrc = ref( getBuiltSrc() );
const isLoading = ref(true);
const isError = ref(false);

watch(() => props.src, src => {
    isLoading.value = true;
    isError.value = false;
    iframeSrc.value = getBuiltSrc();
});

const onIframeLoaded = () => {
    isLoading.value = false;
    emit("iframeLoaded");
};

const onIframeError = () => {
    isLoading.value = false;
    isError.value = true;
    emit("iframeError");
};
</script>
<template>
    <div class="iframe-dynamic" :class="{ 'is-iframe-loading': isLoading }" :style="{ height: height + '!important' }">
		<iframe v-if="iframeSrc" :src="iframeSrc" frameborder="0" allow="fullscreen"
            @load="onIframeLoaded" @error="onIframeError" />
        <div v-if="isLoading" class="iframe-layer">
            <slot name="loading"></slot>
        </div>
        <div v-else-if="isError" class="iframe-layer">
            <slot name="error"></slot>
        </div>
        <div v-else-if="!iframeSrc" class="iframe-layer">
            <slot name="empty"></slot>
        </div>
	</div>
</template>
<style scoped>

.iframe-dynamic {
    @apply tw-relative;
}

.iframe-dynamic iframe {
    @apply tw-absolute tw-inset-0 tw-w-full tw-h-full tw-opacity-0 tw-transition-opacity;
}

.iframe-dynamic:not(.is-iframe-loading) iframe {
    @apply tw-opacity-100;
}

.iframe-dynamic .iframe-layer {
    @apply tw-absolute tw-inset-0 tw-w-full tw-h-full;
}

</style>
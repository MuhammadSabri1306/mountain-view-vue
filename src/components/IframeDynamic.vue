<script setup>
import { ref, watch } from "vue";

const emit = defineEmits([ "iframeLoaded", "iframeError" ]);
const props = defineProps({
    url: { default: null },
    height: { type: String, default: "40rem" }
});

const iframeSrc = ref(props.url);
const isLoading = ref(true);
const isError = ref(false);

watch(() => props.url, url => {
    isLoading.value = true;
    isError.value = false;
    iframeSrc.value = url;
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
        <div v-else class="iframe-layer">
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
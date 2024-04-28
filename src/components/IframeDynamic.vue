<script setup>
import { ref, watch } from "vue";

const emit = defineEmits([ "iframeLoaded" ]);
const props = defineProps({
    url: { default: null, required: true },
    initLoading: { default: false }
});

const isLoading = ref(props.initLoading || (props.url ? true : false));
const iframeSrc = ref(props.url);
watch(() => props.url, url => {
    isLoading.value = true;
    iframeSrc.value = url;
});

const onIframeLoaded = () => {
    isLoading.value = false;
    emit("iframeLoaded");
};
</script>
<template>
    <div class="iframe-dynamic" :class="{ 'is-iframe-loading': isLoading }">
		<iframe v-if="iframeSrc" frameborder="0" allowfullscreen :src="iframeSrc" @load="onIframeLoaded" />
	</div>
</template>
<style scoped>

.iframe-dynamic {
    @apply tw-relative tw-min-h-[40rem] tw-bg-slate-300;
}

.iframe-dynamic iframe {
    @apply tw-absolute tw-inset-0 tw-w-full tw-h-full tw-opacity-0 tw-transition-opacity;
}

.iframe-dynamic:not(.is-iframe-loading) iframe {
    @apply tw-opacity-100;
}

</style>
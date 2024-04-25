<script setup>
import { ref, watch } from "vue";

const props = defineProps({
    url: { default: null, required: true }
});

const isLoading = ref(props.url ? true : false);
const iframeSrc = ref(props.url);
watch(() => props.url, url => {
    isLoading.value = true;
    iframeSrc.value = url;
});
</script>
<template>
    <div class="iframe-dynamic" :class="{ 'is-iframe-loading': isLoading }">
		<iframe frameborder="0" allowfullscreen :src="iframeSrc" @load="isLoading = false" />
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
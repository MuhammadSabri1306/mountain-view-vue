<script setup>
defineProps({
    width: { type: String, default: null },
    height: { type: String, default: null },
});
</script>
<template>
    <div class="skeleton" :style="{ width: width, height: height }" aria-hidden="true"></div>
</template>
<style scoped>

.skeleton {
    @apply tw-relative tw-overflow-hidden tw-bg-slate-200 tw-rounded-md
        after:tw-content-[''] after:tw-absolute after:tw-h-full after:tw-left-0 after:tw-right-0
        after:tw-top-0 after:tw-z-[1] after:tw-animate-[skeleton-animation_1.2s_infinite];
}

@keyframes skeleton-animation {
    from { transform: translateX(-100%); }
    to { transform: translateX(100%); }
}

.skeleton::after {
    transform: translateX(-100%);
    @apply tw-bg-gradient-to-r tw-from-slate-200 tw-via-slate-100/80 tw-to-slate-200;
}

</style>
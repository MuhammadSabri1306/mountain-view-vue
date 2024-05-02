<script setup>
import { ref, computed } from "vue";

const emit = defineEmits([ "update:show" ]);
const props = defineProps({
    show: { type: Boolean, required: true },
});

const showDialog = computed({
    get() { return props.show; },
    set(val) { emit("update:show", val); }
});
</script>
<template>
    <Teleport to="body">
        <Transition :duration="300">
            <div v-if="showDialog" class="overlay-dialog" tabindex="-1" aria-modal="true" role="dialog">
                <div class="overlay-panel">
                    <slot></slot>
                </div>
                <button type="button" @click="showDialog = false" class="overlay-btn-close">
                    <VueFeather type="x" size="2rem" />
                </button>
            </div>
        </Transition>
    </Teleport>
</template>
<style>

.overlay-dialog {
    @apply tw-fixed tw-z-[997] tw-inset-0 tw-w-screen tw-h-screen tw-bg-slate-900/80 tw-opacity-100;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.3s;
}

.v-enter-from,
.v-leave-to {
    @apply tw-opacity-0;
}

.overlay-panel {
    @apply tw-fixed tw-z-[998] tw-left-1/2 tw-top-1/2 -tw-translate-x-1/2 -tw-translate-y-1/2
        tw-max-w-[100vw] tw-max-h-[100vh] tw-mt-0 tw-mb-0;
}

.v-enter-active .overlay-panel,
.v-leave-active .overlay-panel {
    transition: margin-top 0.3s, margin-bottom 0.3s;
}

.v-enter-from .overlay-panel,
.v-leave-to .overlay-panel {
    @apply tw-mt-8 tw-mb-8;
}

.overlay-btn-close {
    @apply tw-fixed tw-z-[999] tw-right-0 tw-top-0 tw-p-4 tw-transition-colors tw-text-white/70 hover:tw-text-white/90;
}

</style>
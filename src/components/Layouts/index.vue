<script setup>
defineProps({
    heading: { type: String, default: null }
});
</script>
<template>
    <header v-if="heading">
        <h3>{{ heading }}</h3>
    </header>
    <main id="content">
        <slot name="content"></slot>
    </main>
</template>
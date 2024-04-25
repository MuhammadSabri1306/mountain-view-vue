<script setup>
import Layouts from "@/components/Layouts";
import IframeDynamic from "@/components/IframeDynamic.vue";
</script>
<template>
    <Layouts>
        <template #content>
            <article class="tw-container">
                <h4 class="tw-mb-4">Test Iframe</h4>
                <IframeDynamic url="https://muhammadsabri1306.github.io/" />
            </article>
        </template>
    </Layouts>
</template>
<script setup>
import { ref } from "vue";

defineProps({
	msg: String,
});
const count = ref(0);

</script>
<template>
	<h1>{{ msg }}</h1>
	<div class="card">
		<button type="button" @click="count++">count is {{ count }}</button>
		<p>
			Edit
			<code>components/HelloWorld.vue</code> to test HMR
		</p>
	</div>
	<p>
		Check out
		<a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>,
		the official Vue + Vite starter
	</p>
	<p>
		Install
		<a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
		in your IDE for a better DX
	</p>
	<p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
	<div id="viewIframe">
		<iframe frameborder="0" allowfullscreen
			src="https://panorago.com/" />
	</div>
</template>
<style scoped>

.read-the-docs {
	color: #888;
}

#viewIframe {
	position: relative;
	min-height: 40rem;
	background-color: rgb(3, 100, 184);
}

#viewIframe iframe {
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
}

</style>

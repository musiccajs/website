<template>
	<footer class="bg-musicca-crimson-560">
		<div class="max-w-3xl mx-auto text-center px-16 pt-10 pb-4 text-gray-100">
			<strong><router-link to="/">Musicca</router-link></strong>
			<p class="mb-4">A modular, extensible and flexible media stream manager for Node.js</p>
			<Stats class="mb-4" />
			<p class="break-words-legacy mb-4">
				Originally made for
				<a href="https://discord.js.org" target="_blank" rel="noopener noreferrer">discord.js website</a>
			</p>
			<p class="text-xs break-words-legacy">
				commit: {{ gitCommit }}<br />
				built at: {{ builtAt }}
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Stats from './Stats.vue';

declare const GIT_COMMIT_HASH: string;
declare const BUILT_AT: string;

const gitCommit = ref(GIT_COMMIT_HASH);
const builtAt = ref(new Date(BUILT_AT).toUTCString());
</script>

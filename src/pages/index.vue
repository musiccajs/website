<template>
	<div class="bg-musicca-crimson-500 py-20">
		<div class="max-w-3xl sm:mx-auto text-center px-8 sm:px-16 flex flex-col gap-10 md:px-12">
			<Logo class="filter drop-shadow-lg my-6" />
			<InstallButton />
		</div>
	</div>

	<div
		class="prose prose-discord dark:prose-light lg:prose-lg px-6 mx-auto pb-8 w-full xl:grid xl:grid-cols-2 xl:gap-x-12 xl:max-w-7xl"
	>
		<div class="col-span-full">
			<h2>About</h2>
			<p>
				Musicca is a <strong>modular</strong>, <strong>extensible</strong> and <strong>flexible</strong> media stream
				manager for
				<a href="https://nodejs.org" target="_blank" rel="noopener"
					>Node.js <heroicons-outline-external-link class="h-5 w-5 inline-block mb-1" aria-hidden="true" /></a
				>. It takes a much more object-oriented approach, making your code significantly tidier and easier to
				comprehend.
			</p>
		</div>
		<div>
			<h2>Why?</h2>
			<ul>
				<li>Object-oriented</li>
				<li>Modular by design</li>
				<li>Flexible</li>
				<li>100% Promise-based</li>
			</ul>
		</div>
		<div>
			<h2>Statistics</h2>
			<Stats />
			<p class="text-center">... and growing!</p>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { useStore } from '~/store';
import MainSource from '~/data/MainSource';

import Logo from '~/components/Logo.vue';
import InstallButton from '~/components/InstallButton.vue';
import Stats from '~/components/Stats.vue';

const store = useStore();

const docs = computed(() => store.state.docs);

if (!docs.value) {
	void store.dispatch('fetchDocs', { inputSource: MainSource });
	void store.dispatch('fetchTags', { currentSource: MainSource });
}
</script>

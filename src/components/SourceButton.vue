<template>
	<a
		:href="`${meta ? sourceURL(meta.path, meta.file, meta.line) : sourceURL(path ?? '')}`"
		target="_blank"
		rel="noopener"
		aria-label="Go to source"
	>
		<heroicons-outline-code
			class="
				text-xl
				fill-current
				text-musicca-crimson-530
				hover:text-musicca-crimson-500
				dark:text-musicca-crimson-330 dark:hover:text-musicca-crimson-300
			"
			aria-hidden="true"
		/>
	</a>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

import { useStore } from '~/store';

import type { DocumentationClassMeta } from '~/interfaces/Documentation';

const store = useStore();

defineProps<{ meta?: DocumentationClassMeta; path?: string }>();

const docs = computed(() => store.state.docs);

const sourceURL = (path: string, file?: string, line?: string | number) =>
	new URL(`${docs.value?.tag ?? ''}/${path}${file ? `/${file}` : ''}${line ? `#L${line}` : ''}`, docs.value?.source);
</script>

<script lang="ts">
	import { IconPage, filterIconsByKeyword } from 'runes-webkit';
	import * as icons from '$lib';
	const keywordsToInclude = 'Regular';
	const keyIcons = filterIconsByKeyword(icons, keywordsToInclude);
</script>

<IconPage
	icons={keyIcons}
	title="Regular Icons - Svelte Awesome Icons"
	tab1Class="md:grid-cols-2 lg:grid-cols-3"
	contentClass="rounded-lg dark-bg-theme mt-4"
/>

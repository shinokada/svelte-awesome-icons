<script lang="ts">
	import { getContext } from 'svelte';
	import type { BaseProps, Props } from './types';

	const ctx: BaseProps = getContext('iconCtx') ?? {};

	let {
		size = ctx.size || '24',
		role = ctx.role || 'img',
		color = ctx.color || 'currentColor',
		title,
		desc,
		ariaLabel = 'atom solid',
		...restProps
	}: Props = $props();

	let ariaDescribedby = `${title?.id || ''} ${desc?.id || ''}`;
	const hasDescription = $derived(!!(title?.id || desc?.id));
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	{...restProps}
	{role}
	width={size}
	height={size}
	fill={color}
	aria-label={ariaLabel}
	aria-describedby={hasDescription ? ariaDescribedby : undefined}
	viewBox="0 0 512 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M256 398.8c-11.8 5.1-23.4 9.7-34.9 13.5c16.7 33.8 31 35.7 34.9 35.7s18.1-1.9 34.9-35.7c-11.4-3.9-23.1-8.4-34.9-13.5zM446 256c33 45.2 44.3 90.9 23.6 128c-20.2 36.3-62.5 49.3-115.2 43.2c-22 52.1-55.6 84.8-98.4 84.8s-76.4-32.7-98.4-84.8c-52.7 6.1-95-6.8-115.2-43.2C21.7 346.9 33 301.2 66 256c-33-45.2-44.3-90.9-23.6-128c20.2-36.3 62.5-49.3 115.2-43.2C179.6 32.7 213.2 0 256 0s76.4 32.7 98.4 84.8c52.7-6.1 95 6.8 115.2 43.2c20.7 37.1 9.4 82.8-23.6 128zm-65.8 67.4c-1.7 14.2-3.9 28-6.7 41.2c31.8 1.4 38.6-8.7 40.2-11.7c2.3-4.2 7-17.9-11.9-48.1c-6.8 6.3-14 12.5-21.6 18.6zm-6.7-175.9c2.8 13.1 5 26.9 6.7 41.2c7.6 6.1 14.8 12.3 21.6 18.6c18.9-30.2 14.2-44 11.9-48.1c-1.6-2.9-8.4-13-40.2-11.7zM290.9 99.7C274.1 65.9 259.9 64 256 64s-18.1 1.9-34.9 35.7c11.4 3.9 23.1 8.4 34.9 13.5c11.8-5.1 23.4-9.7 34.9-13.5zm-159 88.9c1.7-14.3 3.9-28 6.7-41.2c-31.8-1.4-38.6 8.7-40.2 11.7c-2.3 4.2-7 17.9 11.9 48.1c6.8-6.3 14-12.5 21.6-18.6zM110.2 304.8C91.4 335 96 348.7 98.3 352.9c1.6 2.9 8.4 13 40.2 11.7c-2.8-13.1-5-26.9-6.7-41.2c-7.6-6.1-14.8-12.3-21.6-18.6zM336 256a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zm-80-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
	/>
</svg>

<!--
@component
[Go to docs](https://svelte-awesome-icons.codewithshin.com/)
## Props
@prop size = ctx.size || '24'
@prop role = ctx.role || 'img'
@prop color = ctx.color || 'currentColor'
@prop title
@prop desc
@prop ariaLabel = 'atom solid'
@prop ...restProps
-->

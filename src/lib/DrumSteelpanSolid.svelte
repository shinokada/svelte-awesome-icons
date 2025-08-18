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
		ariaLabel = 'drum steelpan solid',
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
	viewBox="0 0 576 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M288 32c159.1 0 288 48 288 128l0 192c0 80-128.9 128-288 128S0 432 0 352L0 160C0 80 128.9 32 288 32zM528 160c0-9.9-8-29.9-55-49.8c-18.6-7.9-40.9-14.4-66-19.4l-27.8 43.6c-7.3 11.5-11.2 24.8-11.2 38.4c0 17.5 6.4 34.4 18.1 47.5l9.8 11c29.8-5.2 55.9-12.5 77.2-21.5c47.1-19.9 55-39.9 55-49.8zM349.2 237.3c-8-26.2-32.4-45.3-61.2-45.3s-53.3 19.1-61.2 45.3c19.4 1.7 39.9 2.7 61.2 2.7s41.8-.9 61.2-2.7zM169 90.8c-25.2 5-47.4 11.6-66 19.4C56 130.1 48 150.1 48 160s8 29.9 55 49.8c21.3 9 47.4 16.3 77.2 21.5l9.8-11c11.6-13.1 18.1-30 18.1-47.5c0-13.6-3.9-26.9-11.2-38.4L169 90.8zm56.3-8C224.5 87 224 91.5 224 96c0 35.3 28.7 64 64 64s64-28.7 64-64c0-4.5-.5-9-1.4-13.2C330.8 81 309.8 80 288 80s-42.8 1-62.6 2.8z"
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
@prop ariaLabel = 'drum steelpan solid'
@prop ...restProps
-->

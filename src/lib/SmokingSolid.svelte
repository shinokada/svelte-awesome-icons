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
		ariaLabel = 'smoking solid',
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
	viewBox="0 0 640 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M448 32l0 11c0 38.2 15.2 74.8 42.2 101.8l21 21c21 21 32.8 49.5 32.8 79.2l0 11c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-11c0-12.7-5.1-24.9-14.1-33.9l-21-21C405.9 151.1 384 98.1 384 43l0-11c0-17.7 14.3-32 32-32s32 14.3 32 32zM576 256l0-11c0-38.2-15.2-74.8-42.2-101.8l-21-21c-21-21-32.8-49.5-32.8-79.2l0-11c0-17.7 14.3-32 32-32s32 14.3 32 32l0 11c0 12.7 5.1 24.9 14.1 33.9l21 21c39 39 60.9 91.9 60.9 147.1l0 11c0 17.7-14.3 32-32 32s-32-14.3-32-32zM0 416c0-35.3 28.7-64 64-64l352 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32L64 512c-35.3 0-64-28.7-64-64l0-32zm224 0l0 32 160 0 0-32-160 0zm288-64c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zm96 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32z"
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
@prop ariaLabel = 'smoking solid'
@prop ...restProps
-->

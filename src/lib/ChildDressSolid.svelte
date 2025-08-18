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
		ariaLabel = 'child dress solid',
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
	viewBox="0 0 320 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M224 64A64 64 0 1 0 96 64a64 64 0 1 0 128 0zM88 400l0 80c0 17.7 14.3 32 32 32s32-14.3 32-32l0-80 16 0 0 80c0 17.7 14.3 32 32 32s32-14.3 32-32l0-80 17.8 0c10.9 0 18.6-10.7 15.2-21.1l-31.1-93.4 28.6 37.8c10.7 14.1 30.8 16.8 44.8 6.2s16.8-30.7 6.2-44.8L254.6 207c-22.4-29.6-57.5-47-94.6-47s-72.2 17.4-94.6 47L6.5 284.7c-10.7 14.1-7.9 34.2 6.2 44.8s34.2 7.9 44.8-6.2l28.7-37.8L55 378.9C51.6 389.3 59.3 400 70.2 400L88 400z"
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
@prop ariaLabel = 'child dress solid'
@prop ...restProps
-->

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
		ariaLabel = 'virus solid',
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
		d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 11.5c0 49.9-60.3 74.9-95.6 39.6L120.2 75C107.7 62.5 87.5 62.5 75 75s-12.5 32.8 0 45.3l8.2 8.2C118.4 163.7 93.4 224 43.5 224L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l11.5 0c49.9 0 74.9 60.3 39.6 95.6L75 391.8c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l8.2-8.2c35.3-35.3 95.6-10.3 95.6 39.6l0 11.5c0 17.7 14.3 32 32 32s32-14.3 32-32l0-11.5c0-49.9 60.3-74.9 95.6-39.6l8.2 8.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-8.2-8.2c-35.3-35.3-10.3-95.6 39.6-95.6l11.5 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-11.5 0c-49.9 0-74.9-60.3-39.6-95.6l8.2-8.2c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-8.2 8.2C348.3 118.4 288 93.4 288 43.5L288 32zM176 224a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm128 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
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
@prop ariaLabel = 'virus solid'
@prop ...restProps
-->

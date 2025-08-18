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
		ariaLabel = 'mixer brands',
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
		d="M114.57,76.07a45.71,45.71,0,0,0-67.51-6.41c-17.58,16.18-19,43.52-4.75,62.77l91.78,123L41.76,379.58c-14.23,19.25-13.11,46.59,4.74,62.77A45.71,45.71,0,0,0,114,435.94L242.89,262.7a12.14,12.14,0,0,0,0-14.23ZM470.24,379.58,377.91,255.45l91.78-123c14.22-19.25,12.83-46.59-4.75-62.77a45.71,45.71,0,0,0-67.51,6.41l-128,172.12a12.14,12.14,0,0,0,0,14.23L398,435.94a45.71,45.71,0,0,0,67.51,6.41C483.35,426.17,484.47,398.83,470.24,379.58Z"
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
@prop ariaLabel = 'mixer brands'
@prop ...restProps
-->

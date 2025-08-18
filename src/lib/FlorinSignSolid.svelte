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
		ariaLabel = 'florin sign solid',
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
	viewBox="0 0 384 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M314.7 32c-38.8 0-73.7 23.3-88.6 59.1L170.7 224 64 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l80 0L98.9 396.3c-5 11.9-16.6 19.7-29.5 19.7L32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l37.3 0c38.8 0 73.7-23.3 88.6-59.1L213.3 288 320 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-80 0 45.1-108.3c5-11.9 16.6-19.7 29.5-19.7L352 96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-37.3 0z"
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
@prop ariaLabel = 'florin sign solid'
@prop ...restProps
-->

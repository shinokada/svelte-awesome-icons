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
		ariaLabel = 'hryvnia sign solid',
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
		d="M121.9 116.2C138.3 103.1 158.7 96 179.6 96L223 96c27.1 0 49 21.9 49 49c0 11.5-4 22.4-11.1 31L32 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l123.5 0-50.6 28.9c-1.7 1-3.4 2-5.1 3.1L32 272c-17.7 0-32 14.3-32 32s14.3 32 32 32l20.3 0c-2.8 9.9-4.3 20.4-4.3 31c0 62.4 50.6 113 113 113l43.4 0c35.5 0 70-12.1 97.7-34.3L308 441c13.8-11 16-31.2 5-45s-31.2-16-45-5l-5.9 4.7c-16.4 13.1-36.7 20.2-57.7 20.2L161 416c-27.1 0-49-21.9-49-49c0-11.5 4-22.4 11.1-31L352 336c17.7 0 32-14.3 32-32s-14.3-32-32-32l-123.5 0 50.6-28.9c1.7-1 3.4-2 5.1-3.1l67.8 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-20.3 0c2.8-10 4.3-20.4 4.3-31c0-62.4-50.6-113-113-113l-43.4 0c-35.5 0-70 12.1-97.7 34.3L76 71c-13.8 11-16 31.2-5 45s31.2 16 45 5l5.9-4.7z"
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
@prop ariaLabel = 'hryvnia sign solid'
@prop ...restProps
-->

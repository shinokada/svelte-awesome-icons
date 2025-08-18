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
		ariaLabel = 'bong solid',
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
	viewBox="0 0 448 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M160 208.5c0 29.1-15.6 53.9-37.2 67.8c-17.2 11.1-31.5 26.1-41.7 43.7l221.8 0c-10.2-17.6-24.5-32.6-41.7-43.7c-21.6-13.9-37.2-38.7-37.2-67.8L224 64l-64 0 0 144.5zM288 64l0 144.5c0 5.7 3.1 10.9 7.9 14c11.2 7.2 21.5 15.5 30.9 24.8L366.1 208l-7-7c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l24 24 24 24c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-7-7-43.3 43.3C374 314.1 384 347.9 384 384c0 39.4-11.9 76.1-32.2 106.5c-9.6 14.4-26.5 21.5-43.8 21.5L76.1 512c-17.3 0-34.2-7.1-43.8-21.5C11.9 460.1 0 423.4 0 384c0-67.8 35.1-127.3 88.1-161.5c4.8-3.1 7.9-8.3 7.9-14L96 64C78.3 64 64 49.7 64 32S78.3 0 96 0l16 0L272 0l16 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
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
@prop ariaLabel = 'bong solid'
@prop ...restProps
-->

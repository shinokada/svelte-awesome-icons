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
		ariaLabel = 'face sad cry regular',
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
		d="M400 406.1L400 288c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 152.6c-28.7 15-61.4 23.4-96 23.4s-67.3-8.5-96-23.4L160 288c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 118.1C72.6 368.2 48 315 48 256C48 141.1 141.1 48 256 48s208 93.1 208 208c0 59-24.6 112.2-64 150.1zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM159.6 220c10.6 0 19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C199.7 186.8 179 180 159.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9c5.5-5.8 14.8-9.7 25.4-9.7zm166.6 9.7c5.5-5.8 14.8-9.7 25.4-9.7s19.9 3.8 25.4 9.7c7.6 8.1 20.2 8.5 28.3 .9s8.5-20.2 .9-28.3C391.7 186.8 371 180 351.6 180s-40.1 6.8-54.6 22.3c-7.6 8.1-7.1 20.7 .9 28.3s20.7 7.1 28.3-.9zM208 320l0 32c0 26.5 21.5 48 48 48s48-21.5 48-48l0-32c0-26.5-21.5-48-48-48s-48 21.5-48 48z"
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
@prop ariaLabel = 'face sad cry regular'
@prop ...restProps
-->

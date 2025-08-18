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
		ariaLabel = 'pied piper brands',
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
	viewBox="0 0 480 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M455.93,23.2C429.23,30,387.79,51.69,341.35,90.66A206,206,0,0,0,240,64C125.13,64,32,157.12,32,272s93.13,208,208,208,208-93.13,208-208a207.25,207.25,0,0,0-58.75-144.81,155.35,155.35,0,0,0-17,27.4A176.16,176.16,0,0,1,417.1,272c0,97.66-79.44,177.11-177.09,177.11a175.81,175.81,0,0,1-87.63-23.4c82.94-107.33,150.79-37.77,184.31-226.65,5.79-32.62,28-94.26,126.23-160.18C471,33.45,465.35,20.8,455.93,23.2ZM125,406.4A176.66,176.66,0,0,1,62.9,272C62.9,174.34,142.35,94.9,240,94.9a174,174,0,0,1,76.63,17.75C250.64,174.76,189.77,265.52,125,406.4Z"
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
@prop ariaLabel = 'pied piper brands'
@prop ...restProps
-->

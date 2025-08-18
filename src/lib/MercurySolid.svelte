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
		ariaLabel = 'mercury solid',
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
		d="M72.1 7C85.8-4 106-1.8 117 12c17.6 22 44.7 36 75 36s57.3-14 75-36c11.1-13.8 31.2-16 45-5s16 31.2 5 45c-7.8 9.7-16.6 18.4-26.4 26.1C337.3 109.7 368 163.3 368 224c0 89.1-66.2 162.7-152 174.4l0 25.6 32 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-32 0 0 16c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-16-32 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l32 0 0-25.6C82.2 386.7 16 313.1 16 224c0-60.7 30.7-114.3 77.5-145.9C83.7 70.5 74.9 61.7 67.1 52c-11.1-13.8-8.8-33.9 5-45zM80 224a112 112 0 1 0 224 0A112 112 0 1 0 80 224z"
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
@prop ariaLabel = 'mercury solid'
@prop ...restProps
-->

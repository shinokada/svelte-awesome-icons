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
		ariaLabel = 'helmet un solid',
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
		d="M479.5 224C471.2 98.9 367.2 0 240 0C107.5 0 0 107.5 0 240l0 56.3C0 344.8 39.2 384 87.7 384L200 384l14.9 0L343.5 505.4c4.5 4.2 10.4 6.6 16.5 6.6l96 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-86.5 0-1.5-1.5L368 288l80 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-.5 0zM320 417.2l-78-73.7L274.4 288l45.6 0 0 129.2zM285.3 103.1l34.7 52 0-43.2c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 7.1-4.6 13.3-11.4 15.3s-14-.6-17.9-6.4l-34.7-52 0 43.2c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-7.1 4.6-13.3 11.4-15.3s14 .6 17.9 6.4zM160 112l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16l0 64c0 26.5-21.5 48-48 48s-48-21.5-48-48l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z"
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
@prop ariaLabel = 'helmet un solid'
@prop ...restProps
-->

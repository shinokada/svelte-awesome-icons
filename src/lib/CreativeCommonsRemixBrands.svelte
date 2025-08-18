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
		ariaLabel = 'creative commons remix brands',
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
	viewBox="0 0 496 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256 0 123.1 104.7 8 247.6 8zm.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8 103.2 0 202.8-81.1 202.8-202.8.1-113.8-90.2-203.3-202.8-203.3zm161.7 207.7l4.9 2.2v70c-7.2 3.6-63.4 27.5-67.3 28.8-6.5-1.8-113.7-46.8-137.3-56.2l-64.2 26.6-63.3-27.5v-63.8l59.3-24.8c-.7-.7-.4 5-.4-70.4l67.3-29.7L361 178.5v61.6l49.1 20.3zm-70.4 81.5v-43.8h-.4v-1.8l-113.8-46.5V295l113.8 46.9v-.4l.4.4zm7.5-57.6l39.9-16.4-36.8-15.5-39 16.4 35.9 15.5zm52.3 38.1v-43L355.2 298v43.4l44.3-19z"
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
@prop ariaLabel = 'creative commons remix brands'
@prop ...restProps
-->

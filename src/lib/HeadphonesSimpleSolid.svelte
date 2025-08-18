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
		ariaLabel = 'headphones simple solid',
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
		d="M256 80C141.1 80 48 173.1 48 288l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 288C0 146.6 114.6 32 256 32s256 114.6 256 256l0 104c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-104c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64l16 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-64zm288-64c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32l16 0z"
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
@prop ariaLabel = 'headphones simple solid'
@prop ...restProps
-->

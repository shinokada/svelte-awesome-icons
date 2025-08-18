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
		ariaLabel = 'rupiah sign solid',
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
		d="M0 64C0 46.3 14.3 32 32 32l80 0c79.5 0 144 64.5 144 144c0 58.8-35.2 109.3-85.7 131.7l51.4 128.4c6.6 16.4-1.4 35-17.8 41.6s-35-1.4-41.6-17.8L106.3 320 64 320l0 128c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 288 0 64zM64 256l48 0c44.2 0 80-35.8 80-80s-35.8-80-80-80L64 96l0 160zm256-96l80 0c61.9 0 112 50.1 112 112s-50.1 112-112 112l-48 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-128 0-160c0-17.7 14.3-32 32-32zm80 160c26.5 0 48-21.5 48-48s-21.5-48-48-48l-48 0 0 96 48 0z"
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
@prop ariaLabel = 'rupiah sign solid'
@prop ...restProps
-->

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
		ariaLabel = 'toilets portable solid',
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
	viewBox="0 0 576 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M32 0L224 0c17.7 0 32 14.3 32 32l0 32L0 64 0 32C0 14.3 14.3 0 32 0zM0 96l24 0 208 0 24 0 0 24 0 368c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8L48 480l0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 120 0 96zM192 224c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16zM352 0L544 0c17.7 0 32 14.3 32 32l0 32L320 64l0-32c0-17.7 14.3-32 32-32zM320 96l24 0 208 0 24 0 0 24 0 368c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8-160 0 0 8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-368 0-24zM512 224c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16z"
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
@prop ariaLabel = 'toilets portable solid'
@prop ...restProps
-->

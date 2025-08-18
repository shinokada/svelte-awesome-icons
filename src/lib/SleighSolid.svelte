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
		ariaLabel = 'sleigh solid',
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
	viewBox="0 0 640 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l0 160c0 53 43 96 96 96l0 32 64 0 0-32 192 0 0 32 64 0 0-32c53 0 96-43 96-96l0-96c17.7 0 32-14.3 32-32s-14.3-32-32-32l-32 0-32 0c-17.7 0-32 14.3-32 32l0 41.3c0 30.2-24.5 54.7-54.7 54.7c-75.5 0-145.6-38.9-185.6-102.9l-4.3-6.9C174.2 67.6 125 37.6 70.7 32.7c-2.2-.5-4.4-.7-6.7-.7l-9 0L32 32zM640 384c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 8c0 13.3-10.7 24-24 24L64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l488 0c48.6 0 88-39.4 88-88l0-8z"
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
@prop ariaLabel = 'sleigh solid'
@prop ...restProps
-->

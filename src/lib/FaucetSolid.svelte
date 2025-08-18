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
		ariaLabel = 'faucet solid',
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
		d="M192 96l0 12L96 96c-17.7 0-32 14.3-32 32s14.3 32 32 32l96-12 31-3.9 1-.1 1 .1 31 3.9 96 12c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 12 0-12c0-17.7-14.3-32-32-32s-32 14.3-32 32zM32 256c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l100.1 0c20.2 29 53.9 48 91.9 48s71.7-19 91.9-48l36.1 0c17.7 0 32 14.3 32 32s14.3 32 32 32l64 0c17.7 0 32-14.3 32-32c0-88.4-71.6-160-160-160l-32 0-22.6-22.6c-6-6-14.1-9.4-22.6-9.4L256 224l0-43.8-32-4-32 4 0 43.8-18.7 0c-8.5 0-16.6 3.4-22.6 9.4L128 256l-96 0z"
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
@prop ariaLabel = 'faucet solid'
@prop ...restProps
-->

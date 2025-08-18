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
		ariaLabel = 'mitten solid',
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
	viewBox="0 0 448 512"
>
	{#if title?.id && title.title}
		<title id={title.id}>{title.title}</title>
	{/if}
	{#if desc?.id && desc.desc}
		<desc id={desc.id}>{desc.desc}</desc>
	{/if}
	<path
		d="M352 384L64 384 5.4 178.9C1.8 166.4 0 153.4 0 140.3C0 62.8 62.8 0 140.3 0l3.4 0c66 0 123.5 44.9 139.5 108.9l31.4 125.8 17.6-20.1C344.8 200.2 362.9 192 382 192l2.8 0c34.9 0 63.3 28.3 63.3 63.3c0 15.9-6 31.2-16.8 42.9L352 384zM32 448c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32l0-32z"
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
@prop ariaLabel = 'mitten solid'
@prop ...restProps
-->

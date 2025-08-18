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
		ariaLabel = 'dumpster solid',
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
		d="M49.7 32c-10.5 0-19.8 6.9-22.9 16.9L.9 133c-.6 2-.9 4.1-.9 6.1C0 150.7 9.3 160 20.9 160l94 0L140.5 32 49.7 32zM272 160l0-128-98.9 0L147.5 160 272 160zm32 0l124.5 0L402.9 32 304 32l0 128zm157.1 0l94 0c11.5 0 20.9-9.3 20.9-20.9c0-2.1-.3-4.1-.9-6.1L549.2 48.9C546.1 38.9 536.8 32 526.3 32l-90.8 0 25.6 128zM32 192l4 32-4 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l12 0L64 448c0 17.7 14.3 32 32 32s32-14.3 32-32l320 0c0 17.7 14.3 32 32 32s32-14.3 32-32l20-160 12 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-4 0 4-32L32 192z"
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
@prop ariaLabel = 'dumpster solid'
@prop ...restProps
-->
